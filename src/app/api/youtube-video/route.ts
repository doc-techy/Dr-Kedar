import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 })
  }

  try {
    // Fetch video data from YouTube oEmbed API (public, no API key needed)
    const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    const oEmbedResponse = await fetch(oEmbedUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    
    if (!oEmbedResponse.ok) {
      throw new Error('Failed to fetch video data')
    }

    const oEmbedData = await oEmbedResponse.json()

    // Fetch the actual YouTube page to extract metadata
    let duration = ''
    let views = ''
    let publishedDate = ''

    try {
      const videoPageUrl = `https://www.youtube.com/watch?v=${videoId}`
      const pageResponse = await fetch(videoPageUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        next: { revalidate: 3600 }
      })
      
      if (pageResponse.ok) {
        const html = await pageResponse.text()
        
        // Extract duration from JSON-LD or playerConfig
        const durationPatterns = [
          /"approxDurationMs":"(\d+)"/,
          /"lengthSeconds":"(\d+)"/,
          /"duration":"PT(\d+)M(\d+)S"/,
          /itemprop="duration" content="PT(\d+)M(\d+)S"/
        ]
        
        for (const pattern of durationPatterns) {
          const match = html.match(pattern)
          if (match) {
            if (match[0].includes('DurationMs')) {
              const ms = parseInt(match[1])
              const seconds = Math.floor(ms / 1000)
              const minutes = Math.floor(seconds / 60)
              const secs = seconds % 60
              duration = `${minutes}:${secs.toString().padStart(2, '0')}`
            } else if (match[0].includes('lengthSeconds')) {
              const seconds = parseInt(match[1])
              const minutes = Math.floor(seconds / 60)
              const secs = seconds % 60
              duration = `${minutes}:${secs.toString().padStart(2, '0')}`
            } else if (match[2] !== undefined) {
              const minutes = parseInt(match[1])
              const secs = parseInt(match[2])
              duration = `${minutes}:${secs.toString().padStart(2, '0')}`
            }
            break
          }
        }

        // Extract view count
        const viewPatterns = [
          /"viewCount":"(\d+)"/,
          /"simpleText":"([\d,]+)\s+views"/,
          /itemprop="interactionCount" content="(\d+)"/,
          /([\d,]+)\s+views/i
        ]
        
        for (const pattern of viewPatterns) {
          const match = html.match(pattern)
          if (match) {
            const viewCountStr = match[1] || match[0].match(/([\d,]+)/)?.[1]
            if (viewCountStr) {
              const count = parseInt(viewCountStr.replace(/,/g, ''))
              if (count >= 1000000) {
                views = `${(count / 1000000).toFixed(1)}M`
              } else if (count >= 1000) {
                views = `${(count / 1000).toFixed(1)}K`
              } else {
                views = count.toString()
              }
              break
            }
          }
        }

        // Extract publish date
        const datePatterns = [
          /"publishDate":"([^"]+)"/,
          /"uploadDate":"([^"]+)"/,
          /itemprop="uploadDate" content="([^"]+)"/,
          /"datePublished":"([^"]+)"/
        ]
        
        for (const pattern of datePatterns) {
          const match = html.match(pattern)
          if (match) {
            try {
              const date = new Date(match[1])
              publishedDate = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
              break
            } catch (e) {
              // Continue to next pattern
            }
          }
        }
      }
    } catch (pageError) {
      console.log('Could not fetch video page:', pageError)
    }

    return NextResponse.json({
      title: oEmbedData.title,
      thumbnail: oEmbedData.thumbnail_url,
      author: oEmbedData.author_name,
      duration: duration || 'N/A',
      views: views || 'N/A',
      date: publishedDate || 'N/A'
    })

  } catch (error) {
    console.error('Error fetching YouTube video data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch video data' },
      { status: 500 }
    )
  }
}


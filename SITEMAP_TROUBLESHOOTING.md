# Sitemap Troubleshooting Guide

## Problem: Google Search Console shows sitemap as empty (0 URLs discovered)

## ✅ Current Implementation Status

The sitemap is correctly implemented at: `src/app/sitemap.ts`

It includes 6 URLs:
1. `/` (Homepage)
2. `/about`
3. `/book-appointment`
4. `/publications`
5. `/videos`
6. `/courses`

## 🔍 Debugging Steps

### Step 1: Verify Sitemap is Accessible

**Test the sitemap URL:**
```
https://www.lungfocus.com/sitemap.xml
```

**Expected Output:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.lungfocus.com</loc>
    <lastmod>2026-01-10T00:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <!-- More URLs... -->
</urlset>
```

### Step 2: Validate XML Format

Use these tools to validate:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://validator.w3.org/

### Step 3: Check Google Search Console

1. Go to: https://search.google.com/search-console
2. Select property: `www.lungfocus.com` (or `lungfocus.com`)
3. Navigate to: **Sitemaps** (in left sidebar)
4. Check status of: `https://www.lungfocus.com/sitemap.xml`

**Possible Status Messages:**
- ✅ "Success" with URL count → Working correctly
- ❌ "Couldn't fetch" → Sitemap URL not accessible
- ⚠️ "0 URLs discovered" → Sitemap fetched but empty/malformed
- ⚠️ "URLs not accessible" → URLs return 404/redirect

### Step 4: Re-submit Sitemap

If sitemap shows as empty:

1. **Remove old sitemap entry** (if exists)
2. **Add new sitemap**: `https://www.lungfocus.com/sitemap.xml`
3. **Wait 24-48 hours** for Google to re-crawl
4. **Check again** in Google Search Console

### Step 5: Verify Individual URLs

Use Google Search Console "URL Inspection" tool:

1. Go to: **URL Inspection** (top search bar)
2. Test each URL from sitemap:
   - `https://www.lungfocus.com`
   - `https://www.lungfocus.com/about`
   - `https://www.lungfocus.com/book-appointment`
   - etc.
3. Check if URLs are "Indexable" or have errors

### Step 6: Check Robots.txt

Verify robots.txt allows sitemap:
- Visit: `https://www.lungfocus.com/robots.txt`
- Should contain: `Sitemap: https://www.lungfocus.com/sitemap.xml`

## 🚨 Common Issues & Solutions

### Issue 1: Sitemap Returns HTML Instead of XML
**Cause**: Next.js route not configured correctly
**Solution**: Verify `src/app/sitemap.ts` exists and exports default function

### Issue 2: Cached Empty Sitemap
**Cause**: Google cached an old/empty version
**Solution**: 
- Remove sitemap from Google Search Console
- Wait 24 hours
- Re-add sitemap
- Request re-indexing

### Issue 3: URLs in Sitemap Return 404
**Cause**: Pages don't exist or routes are wrong
**Solution**: Verify all pages in sitemap actually exist and are accessible

### Issue 4: Domain Mismatch
**Cause**: Sitemap uses different domain than property in Search Console
**Solution**: Ensure sitemap uses `www.lungfocus.com` (matches Search Console property)

## ✅ Verification Checklist

- [ ] Sitemap accessible at: `https://www.lungfocus.com/sitemap.xml`
- [ ] Sitemap returns valid XML (not HTML or error)
- [ ] All 6 URLs in sitemap are accessible
- [ ] Robots.txt references sitemap
- [ ] Sitemap submitted in Google Search Console
- [ ] Property domain matches sitemap domain (`www.lungfocus.com`)
- [ ] Waited 24-48 hours after submission

## 📝 Next Steps

1. **Immediate**: Verify sitemap XML is accessible and valid
2. **If invalid**: Fix sitemap format
3. **If valid but empty in GSC**: Re-submit and wait 24-48 hours
4. **If still empty**: Check if URLs are blocked by robots.txt or return errors


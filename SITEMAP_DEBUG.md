# Sitemap Debug Guide

## Issue: Sitemap shows as empty in Google Search Console

## Quick Checks:

### 1. Verify Sitemap is Accessible
Visit: `https://www.lungfocus.com/sitemap.xml`

You should see XML like:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.lungfocus.com</loc>
    <lastmod>2026-01-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  ...
</urlset>
```

### 2. Check in Google Search Console
1. Go to: https://search.google.com/search-console
2. Select your property: `www.lungfocus.com`
3. Go to: **Sitemaps** (left sidebar)
4. Check if sitemap is submitted: `https://www.lungfocus.com/sitemap.xml`
5. Click on the sitemap to see details

### 3. Common Issues & Solutions

#### Issue A: Sitemap shows "Couldn't fetch"
- **Cause**: Sitemap URL is wrong or site is down
- **Solution**: Verify the URL is accessible in browser

#### Issue B: Sitemap shows "0 URLs discovered"
- **Cause**: Sitemap XML is malformed or empty
- **Solution**: Check the XML format is valid
- **Test**: Use https://www.xml-sitemaps.com/validate-xml-sitemap.html

#### Issue C: "Sitemap is HTML, not XML"
- **Cause**: Next.js route not working correctly
- **Solution**: Ensure `src/app/sitemap.ts` exists and exports default function

#### Issue D: "URLs not accessible"
- **Cause**: URLs in sitemap return 404 or redirect
- **Solution**: Verify each URL in sitemap works

## Current Sitemap Implementation

The sitemap is defined in: `src/app/sitemap.ts`

It includes:
- `/` (Homepage)
- `/about`
- `/book-appointment`
- `/publications`
- `/videos`
- `/courses`

## Testing Steps

1. **Local Test** (if dev server running):
   ```bash
   curl http://localhost:3000/sitemap.xml
   ```

2. **Production Test**:
   ```bash
   curl https://www.lungfocus.com/sitemap.xml
   ```

3. **Validate XML**:
   - Copy sitemap XML
   - Paste into: https://validator.w3.org/
   - Or use: https://www.xml-sitemaps.com/validate-xml-sitemap.html

4. **Re-submit in Google Search Console**:
   - Remove old sitemap entry
   - Add: `https://www.lungfocus.com/sitemap.xml`
   - Wait 24-48 hours

## If Still Empty After Fixes

1. **Clear Cache**: Wait 24-48 hours after resubmission
2. **Check Robots.txt**: Ensure `/sitemap.xml` is not blocked
3. **Check Server Logs**: Look for errors when Googlebot requests sitemap
4. **Manual Test**: Use Google Search Console "URL Inspection" tool on homepage


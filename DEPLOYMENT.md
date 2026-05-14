# Deployment Guide - Skillz Web Design

## Hosting Options

### 1. **Netlify** (Recommended - Easy Setup)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```
- Configuration: `netlify.toml` is included
- Automatic HTTPS, CDN, and security headers
- Free tier available

### 2. **Vercel** (Optimized for Static Sites)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```
- Configuration: `vercel.json` is included
- Extremely fast CDN, automatic HTTPS
- Free tier available

### 3. **GitHub Pages**
```bash
# Push to GitHub
git push origin main

# Enable Pages in repository settings
# Pages will automatically deploy from main branch
```

### 4. **Traditional Apache/Linux Server**
- Upload all files to your server
- Ensure `.htaccess` is included for security headers
- Enable `mod_rewrite` and `mod_headers` Apache modules
- Configure SSL/TLS certificate (Let's Encrypt recommended)

### 5. **Amazon S3 + CloudFront**
- Upload site to S3 bucket
- Configure CloudFront distribution for CDN
- Enable SSL/TLS certificate
- Recommended for high-traffic sites

## Pre-Deployment Checklist

✅ **Security**
- All external links have `rel="noopener noreferrer"`
- Security headers configured in deployment files
- HTTPS enforced
- Sensitive files blocked (.env, .git, etc.)

✅ **Performance**
- CSS and JS minified and cached
- Images optimized (from Unsplash CDN)
- Compression enabled (gzip/brotli)
- Browser caching configured

✅ **Content**
- All links point to correct pages
- Contact form sends to: nooa.perttula@gmail.com
- Phone: +358-443-355-352
- Social media links connected
- Portfolio projects link to contact page

✅ **SEO**
- Meta descriptions on all pages
- Open Graph tags (optional, in HTML head)
- XML sitemap (optional)
- robots.txt (optional)

## Post-Deployment

### Monitor Performance
- Test on https://www.pagespeed.insights.com/
- Test on https://www.webpagetest.org/
- Monitor uptime with https://www.uptime.com/

### Regular Maintenance
- Update dependencies: `npm update`
- Test contact form regularly
- Check all links monthly
- Review security headers

## Environment Variables (If Needed)
If you add backend functionality later, create a `.env` file:
```
CONTACT_EMAIL=nooa.perttula@gmail.com
CONTACT_PHONE=+358-443-355-352
```

**Note:** Do NOT commit `.env` to version control. It's already in `.gitignore`.

## Troubleshooting

### 404 Pages Not Working
- Ensure `404.html` is in the root directory
- Check deployment configuration includes 404 redirect

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `assets/css/styles.css` exists
- Check file paths in HTML

### Form Not Working
- Verify email links open mail client
- Test on different browsers
- Check that `assets/js/script.js` is loaded

### Security Header Issues
- Verify deployment platform supports custom headers
- Check CSP doesn't block required resources
- Test with browser developer tools (Network tab)

## Need Help?
Reach out at: nooa.perttula@gmail.com
Phone: +358-443-355-352

# pipit.me

Hugo site using [hugo-theme-console](https://github.com/mrmierzejewski/hugo-theme-console).

## Local development

1. Install Hugo (extended): https://gohugo.io/installation/
2. Start server:

```bash
hugo server -D
```

## Deploy to Cloudflare Pages

- Framework preset: **Hugo**
- Build command: `hugo`
- Build output directory: `public`
- Environment variables:
  - `HUGO_VERSION`: `0.146.0` (or newer)
  - `HUGO_ENV`: `production`

Then add custom domain: `pipit.me`.

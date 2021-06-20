module.exports = {
  images: {
    domains: process.env.NEXT_IMAGE_ALLOWED_DOMAINS.split(','),
  },
  distDir: 'out',
  target: 'serverless',
}

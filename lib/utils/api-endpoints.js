const apiBaseUrl = 'https://public-api.wordpress.com/rest/v1.1'
const siteUrl = 'annnetlify.wordpress.com'

export const posts = `${apiBaseUrl}/sites/${siteUrl}/posts/?number=100&pretty=true&order=ASC`
export const getPostBySlug = slug =>
  `${apiBaseUrl}/sites/${siteUrl}/posts/slug:${slug}`

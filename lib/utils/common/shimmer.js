import colors from 'tailwindcss/colors'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${colors.gray[100]}" offset="10%" />
      <stop stop-color="${colors.gray[200]}" offset="50%" />
      <stop stop-color="${colors.gray[100]}" offset="90%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${colors.gray[100]}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function getBlurDataURL(w, h) {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`
}

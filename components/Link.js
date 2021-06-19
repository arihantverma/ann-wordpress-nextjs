import NextLink from 'next/link'

export default function Link({ href, styles = '', children }) {
  if (!(href && children)) {
    throw new Error(
      `href and children are mandatory in link you passed ${href} ${children}`,
    )
  }

  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles}>{children}</a>
    </NextLink>
  )
}

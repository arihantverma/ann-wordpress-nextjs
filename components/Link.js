import classnames from 'classnames'
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
      <a className={classnames(styles, 'text-blue-400')}>{children}</a>
    </NextLink>
  )
}

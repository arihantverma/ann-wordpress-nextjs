import classnames from 'classnames'

export default function Emoji({ description, emoji, className, ...rest }) {
  const styles = classnames(className, 'inline-block mx-1')

  return (
    <span
      className={styles}
      role="img"
      aria-label={`${description} emoji` || 'emoji'}
      {...rest}
    >
      {' '}
      {emoji}{' '}
    </span>
  )
}

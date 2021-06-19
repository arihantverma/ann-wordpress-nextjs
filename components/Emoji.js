export default function Emoji({ description, emoji, ...rest }) {
  return (
    <span role="img" aria-label={`${description} emoji` || 'emoji'} {...rest}>
      {emoji}
    </span>
  )
}

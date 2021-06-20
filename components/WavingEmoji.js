import Emoji from './Emoji'

export function WavingEmoji() {
  return (
    <Emoji
      className="animate-wave inline-block"
      description="wave"
      emoji="👋🏼"
      style={{
        transformOrigin: '70% 70%',
      }}
    />
  )
}

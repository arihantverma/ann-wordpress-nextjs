import Link from '@/components/Link'
import Emoji from './Emoji'

function Separator() {
  return <span className="text-gray-400"> | </span>
}

export default function GetInTouch() {
  return (
    <section className="mt-2">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight-text mt-10">
        Get in touch
      </h1>

      <p className="mt-3 text-xl md:text-2xl tracking-tight">
        Let's work together or just say hi
        <Emoji description="smile emoji" emoji="😊" />
      </p>

      <nav className="text-bas mt-1">
        <Link href="https://dribbble.com/annchichi">Dribble</Link>
        <Separator />
        <Link href="https://twitter.com/annchichii">Twitter</Link>
        <Separator />
        <Link href="https://medium.com/@annchichi">Medium</Link>
        <Separator />
        <Link href="https://codepen.io/annchichi/">Codepen</Link>
        <Separator />
        <Link href="https://www.linkedin.com/in/anntaichichi/">Linkedin</Link>
        <Separator />
        <Link href="mailto:anntai.chiahui@gmail.com">Mail</Link>
      </nav>
    </section>
  )
}

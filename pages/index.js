// import Layout from '@/components/Layout'

import GetInTouch from '@/components/GetInTouch'
import Link from '@/components/Link'
import { WavingEmoji } from '@/components/WavingEmoji'

export default function Home() {
  return (
    <div className="text-gray-600 mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight-text mt-10 md:mt-12">
        <span>Hey! I am Ann</span>
        <WavingEmoji />
        <span>.</span>
        <span>
          {' '}
          I am a product designer passionate about solving problems and bringing
          forward underrepresented voices.
        </span>
      </h1>

      <p className="mt-6 text-xl md:text-2xl tracking-tight">
        <span>
          For the past 5 years, I have loved working with colleagues across the
          world to improve web and mobile products. I enjoy discovering new
          design techniques, mentoring others, and collaborating with developers
          to create great user experiences. I’m currently working on a motion
          tool project with Lottiefiles.
        </span>

        <Link href="/about" styles="inline-block mt-2 md:mt-0 md:ml-2">
          A little bit more about me.
        </Link>
      </p>

      <GetInTouch />
    </div>
  )
}

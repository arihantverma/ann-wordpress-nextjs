import Link from '@/components/Link'

function ListItem({ children }) {
  return <li className="px-2 py-2 md:py-4 md:px-3 font-medium">{children}</li>
}

export default function Header() {
  return (
    <div className="pt-9 flex justify-between text-gray-800 max-w-3xl mx-auto">
      <Link href="/" styles="flex items-center">
        <div className="text-2xl font-bold">Ann</div>
      </Link>
      <nav className="flex list-none">
        <Link href="/about">
          <ListItem>About</ListItem>
        </Link>
        <Link href="/writing">
          <ListItem>Writing</ListItem>
        </Link>
        <Link href="/work">
          <ListItem>Work</ListItem>
        </Link>
        {/* ${router.pathname}/ann-resume.pdf */}
        <Link href="/resume">
          <ListItem>Resume</ListItem>
        </Link>
      </nav>
    </div>
  )
}

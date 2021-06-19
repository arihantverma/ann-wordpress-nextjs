import Link from '@/components/Link'

function ListItem({ children }) {
  return <li className="py-4 px-3 font-normal">{children}</li>
}

export default function Header() {
  return (
    <div className="pt-9 flex justify-between">
      <Link href="/">
        <div className="text-2xl font-bold flex items-center">Ann</div>
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
        <Link href="/resume">
          <ListItem>Resume</ListItem>
        </Link>
      </nav>
    </div>
  )
}

import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog/hello">
            hello
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

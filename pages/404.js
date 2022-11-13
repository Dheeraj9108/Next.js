import Link from "next/Link"

const Errorpage = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/blog/hello">
                            hello
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1>Sorry! page not found</h1>
        </>
    )
}

export default Errorpage

import Link from "next/Link"
import { useRouter } from "next/router"
import { useEffect } from 'react'
const Errorpage = () => {
    const router = useRouter();
    const handleinp = () => {
        router.push('/')
    }
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
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
            <button onClick={handleinp}>back </button>
            {/* <button onClick={()=>router.push('/')}>back </button> */}
        </>
    )
}

export default Errorpage

import Link from "next/Link"
import { useRouter } from "next/router"

const Errorpage = () => {
    const router  = useRouter();
    const handleinp =()=> {
        router.push('/')
    }
    
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

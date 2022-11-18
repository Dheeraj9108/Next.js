import Link from "next/link";
import { useRouter } from "next/router"

export const getStaticPaths =async()=> {
    const res = await fetch("url");
    const data = await res.json();
    const paths =data.map((currEle)=> {
        return  {
            params: {
                pageNo:currEle.id.toString()
            }
        }
    })
    return {
        paths,
        fallback:false,
    };
}
export const getStaticProps = async () => {
    const res = await fetch("url");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};


const pageNo = ({ data }) => {
    const router = useRouter();
    const pageNumber = router.query.pageNo
    data.slice(0,5).map((currEle) => {
        return (
            <h1>
                <Link href={`/blog/${currEle.id}`}><div> {currEle.id}</div></Link>
                my blog {pageNumber} content
            </h1>
        )
    })
}

export default pageNo;

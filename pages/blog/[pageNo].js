import { useRouter } from "next/router"

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
    data.map((currEle) => {
        return (
            <h1>
                <div> {currEle.id}</div>
                my blog {pageNumber} content
            </h1>
        )
    })
}

export default pageNo;

import { useRouter } from "next/router"
import Layout from "../../components/Layout"

const Sharesult = () => {
    const router = useRouter();
    return (
        <Layout>
            <h1>{router.query.sha}</h1>
            <p>Sha Result for your words</p>
        </Layout>
    );
} 



export default Sharesult;

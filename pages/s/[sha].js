import { useRouter } from "next/router"
import Layout from "../../components/Layout"

const Sharesult = () => {
    const router = useRouter();
    return (
        <Layout>
            <h2>{router.query.sha}</h2>
            <p>Sha Result for your words. Keep them handy !</p>
            <style jsx>{`
                h2,
                a {
                font-family: 'Arial';
                }
            `}</style>
        </Layout>
    );
} 



export default Sharesult;

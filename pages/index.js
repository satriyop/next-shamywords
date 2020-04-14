import Link from "next/link"
import Layout from "../components/Layout"
import fetch from "isomorphic-unfetch"

const Sha = props => (
    <Link href="/s/[sha]" as={`s/${props.result.sha}`}>
     {/* <Link href="/p/[id]" as={`p/${props.result.id}`}> */}
        <a>{props.result.sha}</a>
    </Link>
);

const Index = (props) =>(
    <Layout>
        <h1>Sha My Words</h1>
        <ul>
            {props.result.map(result => (
                <li key={result.id}>
                    <Sha result={result}/>
                </li>
            ))}
        </ul>
    </Layout>
)


Index.getInitialProps = async function() {
    const url ="http://127.0.0.1:8080/sha"
    const res = await fetch(url);
    const data = await res.json();

    console.log(`Show data fetched. Count ${data.length}`);

    return {
        result: data
        // data: data.map(e => e.sha)

    }
}

export default Index;


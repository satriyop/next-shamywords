import Link from "next/link"

const Sharesult = (props) => (
    <ul>
        {props.shas.map(sha => (
            <li key={sha.created}>
                <Link href="/s/[sha]" as={`s/${sha.sha}`}>
                    <a>{sha.sha}</a>
                </Link>
            </li>
        ))}
        
        <style jsx>{`
            li {
                list-style: none;
                border: 1px solid #eee;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
                cursor: pointer;
            }
            `}</style>
    </ul>
);

export default Sharesult;
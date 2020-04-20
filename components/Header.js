import Link from "next/link"


// const linkStyle = {
//     marginRight :15
// }

const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
                color: grey;
                font-family: 'Arial';
            }
    
            a:hover {
                opacity: 0.6;
            }
            margin-right: 10px;
        `}</style>
        
    </div>
)

export default Header
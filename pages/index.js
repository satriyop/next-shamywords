import Layout from "../components/Layout"
import Words from "../components/Words"

const Index = (props) =>(
    <Layout>
        <h2>Sha My Words</h2>
        <Words/>

        <style jsx>{`
        h2,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0px;
        }
      `}</style>
        
    </Layout>
)

export default Index;


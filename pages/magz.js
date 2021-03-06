import Layout from '../lib/Layout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

const Magz = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
        {props.shows.map(({show}) => (
            <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
            </Link>
            </li>
        ))}
        </ul>
    </Layout>
)

Magz.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}
  
export default Magz
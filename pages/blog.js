import { Layout } from '../components'
import Link from 'next/link'

export default () => {

    const Postlink = ({ title, slug }) => (
        <li>
            <Link as={`/${slug}`} href={`/post?title=${title}`}>
                <a>{title}</a>
            </Link>
        </li>
    )

    return ( 
        <Layout>
            <ul>
                <Postlink title="React Post" slug="react-post" />
                <Postlink title="Angular Post" slug="angular-post" />
                <Postlink title="Vue Post" slug="vue-post" />
            </ul>
        </Layout>
    )
}

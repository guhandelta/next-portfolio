import { Layout } from '../components'
import Link from 'next/link'

export default () => {

    const Postlink = ({ title, slugvalue }) => (
        <li>
            <Link as={`/${slugvalue}`} href={`/post?title=${title}`}>
                <a>{title}</a>
            </Link>
        </li>
    )

    return (
        <Layout>
            <ul>
                <Postlink title="React Post" slugvalue="react-post" />
                <Postlink title="Angular Post" slugvalue="angular-post" />
                <Postlink title="Vue Post" slugvalue="vue-post" />
            </ul>
        </Layout>
    )
}

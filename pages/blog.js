import { Layout } from '../components'
import Link from 'next/link'

export default () => {

    const Postlink = ({ title }) => (
        <li>
            <Link href={`/post?title=${title}`}>
                <a>{title}</a>
            </Link>
        </li>
    )

    return (
        <Layout>
            <ul>
                <Postlink title="React" />
                <Postlink title="Angular" />
                <Postlink title="Vue" />
            </ul>
        </Layout>
    )
}

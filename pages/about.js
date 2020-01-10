import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout title="About">
            <Link href="/">
                <a>Homepage</a>
            </Link>
            <h2>JavaScript Programmer</h2>
            <img src="https://i.ytimg.com/vi/Fnw3lNeH-XI/maxresdefault.jpg" alt="Next JS" height="200px" />
        </Layout>
    )
}
export default About;
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <Link to="/" href="/">
                <a>Homepage</a>
            </Link>
            <h2>JavaScript Programmer</h2>
            <img src="https://i.ytimg.com/vi/Fnw3lNeH-XI/maxresdefault.jpg" alt="Next JS" height="200px" />
        </div>
    )
}
export default About;
import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <Link to="/about" href="/about">
                <a>About</a>
            </Link>
            <h1>App Works!!........</h1>
        </div>
    )
}
export default index;
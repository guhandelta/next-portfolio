import React from 'react'
import Link from 'next/link'

const Layout = ({ children, title }) => {
    return (
        <div className="root">
            <header>
                <Link href="/"><a>Home</a></Link>&emsp;&emsp;
                <Link href="/about"><a>About</a></Link>&emsp;&emsp;
                <Link href="/contact"><a>Contact</a></Link>
            </header>
            <h1>{title}</h1>
            {children}
            <footer>Copyright &copy; {new Date().getFullYear()}</footer>
            <style jsx>{`
                .root{
                    display: flex;
                    justify-content:flex;
                    justify-content:flex;
                    align-items: center;
                    flex-direction: column;
                }
                header{
                    width: 100% ;
                    display: flex;
                    justify-content:space-around;
                    padding: 1em;
                    font-size:1.2rem;
                    background: orange;
                }
                header a{
                    text-decoration: none;
                }
                header a:hover{
                    color: #f5ad42;
                    font-weight: bold;
                    color: lightgrey;
                }
            `}</style>
            <style jsx>{`
                body{
                    /*margin: 0;*/
                    font-size: 110%;
                    color: #f0f0f0;
                }
            `}</style>
        </div>
    )
}
export default Layout;
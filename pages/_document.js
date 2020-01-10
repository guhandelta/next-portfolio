// A custom Document is commonly used to augment your application's <html> and <body> tags. 
//- This is necessary because Next.js pages skip the definition of the surrounding document's markup.
//- This Document can be accessed by all the pages, so the page specific content remains in the respective page
// This way of NextJS Documentation is a more conveniet way of accessing Head and other HTML Document

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="description" cotent="My Portfolio website designed using Next JS" />
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow" /> {/*To inform web crawlers not to index this page*/}
                    <meta name="viewport" content="width=device-width" /> {/*For Mobile Phones*/}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                body{
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
            </html>
        )
    }
}
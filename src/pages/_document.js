import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="description" content="The best place to view, build and analyse your Collective decks!" />
                <link rel="icon" href="/collective_icon.png" />
                <link href="https://fonts.googleapis.com/css2?family=Laila:wght@700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
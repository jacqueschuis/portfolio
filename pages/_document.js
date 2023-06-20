import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return ( 
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="./globals.css" />
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" sizes="any"/>
                <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" sizes="180x180" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,800;1,300;1,500;1,800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
     );
}
 
export default MyDocument;
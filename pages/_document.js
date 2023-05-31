import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return ( 
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="./globals.css" />
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" sizes="any"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,800;1,300;1,500;1,800&display=swap" rel="stylesheet" />
            </Head>
            <body className="h-screen m-0">
                <Main />
                <NextScript />
            </body>
        </Html>
     );
}
 
export default MyDocument;
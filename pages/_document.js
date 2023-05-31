import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return ( 
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="style.css" />
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" sizes="any"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
     );
}
 
export default MyDocument;
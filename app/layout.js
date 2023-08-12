import "./globals.css";

export const metadata = {
  title: "Jacques Pariseau",
  description: "Personal website of Jacques Pariseau, front-end developer",
  keywords: "Developer, portfolio, blog, front end, UI, UX",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#264653" />
      </head>
      <html lang="en" className="overflow-hidden w-full h-screen">
        <body className="font-sans font-normal h-screen overflow-hidden w-full">
          {children}
        </body>
      </html>
    </>
  );
}

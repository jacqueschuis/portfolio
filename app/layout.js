import "./globals.css";

export const metadata = {
  title: "Jacques Pariseau",
  description: "Personal website of Jacques Pariseau, front-end developer",
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
      <html lang="en" className="overflow-x-hidden">
        <body className="font-sans bg-white font-normal">{children}</body>
      </html>
    </>
  );
}

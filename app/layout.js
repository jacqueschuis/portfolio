import "./globals.css";

export const metadata = {
  title: "Jacques Pariseau",
  description: "Personal website of Jacques Pariseau, front-end developer",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}

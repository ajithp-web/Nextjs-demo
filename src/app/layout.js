import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
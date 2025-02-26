"use client";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.scss";
import GlobalLayout from "./Components/Layouts/GlobalLayout";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icons/favicon.png" sizes="any" />
      </head>
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>루트 레이아웃</h2>
        {children}
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import "./globals.css";
import { MSWProvider } from "./components/MSWComponent";

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
        <MSWProvider>
          {children}
          {modal}
        </MSWProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

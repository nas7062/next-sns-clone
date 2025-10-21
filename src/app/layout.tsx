import { ReactNode } from "react";
import "./globals.css";
import { MSWProvider } from "./components/MSWComponent";
import AuthSession from "./components/AuthSession";

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
          <AuthSession>
            {children}
            {modal}
          </AuthSession>
        </MSWProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

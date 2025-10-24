import { ReactNode } from "react";
import "./globals.css";
import { MSWProvider } from "./components/MSWComponent";
import AuthSession from "./components/AuthSession";
import RQProvider from "./(afterlogin)/_components/RQProvider";

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
        <RQProvider>
          <MSWProvider>
            <AuthSession>
              {children}
              {modal}
            </AuthSession>
          </MSWProvider>
        </RQProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

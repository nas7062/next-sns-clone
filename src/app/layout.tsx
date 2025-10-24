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
        <MSWProvider>
          <RQProvider>
            <AuthSession>
              {children}
              {modal}
            </AuthSession>
          </RQProvider>
        </MSWProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

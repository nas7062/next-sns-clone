import { ReactNode } from "react";

export default function BeforeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>비포 로그인 레이아웃</h2>
        <div>{children}</div>
        <div>{modal}</div>
      </body>
    </html>
  );
}

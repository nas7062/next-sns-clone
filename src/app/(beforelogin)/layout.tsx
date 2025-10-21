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
        <div>{children}</div>
        <div>{modal}</div>
      </body>
    </html>
  );
}

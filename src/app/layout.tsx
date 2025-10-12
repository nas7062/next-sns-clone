import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>루트 레이아웃</h2>
        {children}
      </body>
    </html>
  );
}

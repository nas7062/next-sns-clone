export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>홈 레이아웃</h2>
        {children}
      </body>
    </html>
  );
}

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h2>애프터 로그인 레이아웃</h2>
      <body>{children}</body>
    </html>
  );
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h2>홈 레이아웃</h2>
      <body>{children}</body>
    </html>
  );
}

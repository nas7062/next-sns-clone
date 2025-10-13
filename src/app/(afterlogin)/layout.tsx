export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full bg-amber-200">
      <div className="flex mx-auto">
        <header className="w-72 bg-gray-200 h-[100vh] ">
          <div className="fixed flex flex-col">
            <p>sadsa</p>
            <p>sadsa</p>
            <p>sadsa</p>
          </div>
        </header>
        <div className="w-[990px] bg-gray-200 h-[100vh] flex justify-between">
          <main className="bg-green-300 h-[100vh] w-[600px]">{children}</main>
          <section className="bg-sky-300 h-[100vh] w-[350px]">
            <input
              type="text"
              className="w-[350px] border-gray-800 border rounded-lg fixed"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

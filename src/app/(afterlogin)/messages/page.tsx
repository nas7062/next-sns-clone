import Room from "./_components/Room";

export default function Page() {
  return (
    <main>
      <header className="h-14 flex  items-center px-4">
        <h3 className="font-semibold text-xl">쪽지</h3>
      </header>
      <Room />
    </main>
  );
}

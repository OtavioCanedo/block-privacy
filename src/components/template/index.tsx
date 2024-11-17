export function Template({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="sm:ml-14 p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-10">{title}</h1>
      {children}
    </main>
  );
}

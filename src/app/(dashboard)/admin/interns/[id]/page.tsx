export default async function InternDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Intern Detail</h1>
      <p className="text-sm text-zinc-500">ID: {id}</p>
    </div>
  );
}

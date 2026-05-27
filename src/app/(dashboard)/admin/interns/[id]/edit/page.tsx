import { InternsForm } from "@/components/admin/interns-form";

export default async function EditInternPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Edit Intern</h1>
      <InternsForm internId={id} />
    </div>
  );
}

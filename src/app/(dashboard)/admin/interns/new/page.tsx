import { InternsForm } from "@/components/admin/interns-form";

export default function NewInternPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Add Intern</h1>
      <InternsForm />
    </div>
  );
}

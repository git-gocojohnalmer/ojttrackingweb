import Link from "next/link";
import { InternsTable } from "@/components/admin/interns-table";

export default function InternsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Interns</h1>
        <Link
          href="/admin/interns/new"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
        >
          Add Intern
        </Link>
      </div>
      <InternsTable />
    </div>
  );
}

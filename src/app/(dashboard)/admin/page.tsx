import { KpiCards } from "@/components/admin/kpi-cards";
import { InternsTable } from "@/components/admin/interns-table";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <KpiCards />
      <InternsTable />
    </div>
  );
}

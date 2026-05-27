import { ProgressCard } from "@/components/intern/progress-card";
import { MyLogsTable } from "@/components/intern/my-logs-table";

export default function InternDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Dashboard</h1>
      <ProgressCard />
      <MyLogsTable />
    </div>
  );
}

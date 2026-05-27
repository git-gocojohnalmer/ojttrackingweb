import { Card, CardContent } from "@/components/ui/card";

const kpis = [
  { label: "Total Interns", value: "—" },
  { label: "Active", value: "—" },
  { label: "Pending Approvals", value: "—" },
  { label: "Hours Logged Today", value: "—" },
];

export function KpiCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label}>
          <CardContent className="pt-6">
            <p className="text-sm text-zinc-500">{kpi.label}</p>
            <p className="mt-1 text-3xl font-bold text-zinc-900">{kpi.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

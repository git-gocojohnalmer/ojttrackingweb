import { ApprovalsQueue } from "@/components/admin/approvals-queue";

export default function AdminApprovalsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Pending Approvals</h1>
      <ApprovalsQueue />
    </div>
  );
}

import Link from "next/link";
import { MyLogsTable } from "@/components/intern/my-logs-table";

export default function MyLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Logs</h1>
        <Link
          href="/intern/logs/new"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
        >
          Submit Log
        </Link>
      </div>
      <MyLogsTable />
    </div>
  );
}

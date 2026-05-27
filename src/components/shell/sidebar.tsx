import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-16 items-center border-b border-zinc-200 px-6">
        <span className="text-lg font-bold text-indigo-600">OJT Tracker</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/interns"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
        >
          Interns
        </Link>
        <Link
          href="/admin/approvals"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
        >
          Approvals
        </Link>
        <Link
          href="/admin/reports"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
        >
          Reports
        </Link>
      </nav>
    </aside>
  );
}

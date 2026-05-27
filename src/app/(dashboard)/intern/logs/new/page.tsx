import { LogSubmitForm } from "@/components/intern/log-submit-form";

export default function NewLogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Submit Daily Log</h1>
      <LogSubmitForm />
    </div>
  );
}

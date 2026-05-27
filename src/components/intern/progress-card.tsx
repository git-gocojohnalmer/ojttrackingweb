import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

export function ProgressCard() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div>
          <p className="text-sm text-zinc-500">Hours Completed</p>
          <p className="text-3xl font-bold text-zinc-900">—</p>
        </div>
        <ProgressBar value={0} max={100} showLabel />
      </CardContent>
    </Card>
  );
}

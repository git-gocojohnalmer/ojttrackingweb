import { UserMenu } from "./user-menu";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <div />
      <UserMenu />
    </header>
  );
}

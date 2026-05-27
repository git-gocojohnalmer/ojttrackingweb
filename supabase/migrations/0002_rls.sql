-- 0002_rls.sql — Row-Level Security policies

alter table public.profiles  enable row level security;
alter table public.interns   enable row level security;
alter table public.time_logs enable row level security;
alter table public.audit_log enable row level security;

-- Helper: check if calling user is admin
create or replace function public.is_admin()
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- profiles: users see/update their own; admins see all
create policy "profiles: own row" on public.profiles
  for all using (id = auth.uid());

create policy "profiles: admin all" on public.profiles
  for select using (public.is_admin());

-- interns: admins have full access; interns read own record
create policy "interns: admin all" on public.interns
  for all using (public.is_admin());

create policy "interns: own record" on public.interns
  for select using (profile_id = auth.uid());

-- time_logs: interns select/insert own; admins full access
create policy "time_logs: admin all" on public.time_logs
  for all using (public.is_admin());

create policy "time_logs: intern select" on public.time_logs
  for select using (
    intern_id in (select id from public.interns where profile_id = auth.uid())
  );

create policy "time_logs: intern insert" on public.time_logs
  for insert with check (
    intern_id in (select id from public.interns where profile_id = auth.uid())
  );

-- audit_log: admins only
create policy "audit_log: admin all" on public.audit_log
  for all using (public.is_admin());

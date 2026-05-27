-- seed.sql — demo data (run after migrations)
-- Creates 1 admin user + 2 intern users via Supabase Auth API,
-- then populates profiles and interns tables.

-- NOTE: passwords are set via `supabase auth admin` or the dashboard.
-- This file only seeds the public schema rows assuming auth.users already exist.

-- Demo admin
insert into public.profiles (id, role, full_name, email)
values
  ('00000000-0000-0000-0000-000000000001', 'admin', 'HR Admin', 'admin@ojt.local')
on conflict (id) do nothing;

-- Demo interns
insert into public.profiles (id, role, full_name, email)
values
  ('00000000-0000-0000-0000-000000000002', 'intern', 'Maria Santos', 'maria@ojt.local'),
  ('00000000-0000-0000-0000-000000000003', 'intern', 'Juan Dela Cruz', 'juan@ojt.local')
on conflict (id) do nothing;

insert into public.interns (profile_id, school, program, supervisor, required_hours, start_date, end_date)
values
  ('00000000-0000-0000-0000-000000000002', 'SDCA', 'BSIT', 'HR Admin', 486, '2026-06-01', '2026-08-31'),
  ('00000000-0000-0000-0000-000000000003', 'SDCA', 'BSCS', 'HR Admin', 486, '2026-06-01', '2026-08-31')
on conflict do nothing;

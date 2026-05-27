-- 0001_init.sql — profiles, interns, time_logs, enums

create type public.user_role as enum ('admin', 'intern');
create type public.intern_status as enum ('active', 'completed', 'dropped');
create type public.log_status as enum ('pending', 'approved', 'rejected');

-- Mirrors auth.users 1-to-1
create table public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  role       public.user_role not null default 'intern',
  full_name  text not null,
  email      text not null,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table public.interns (
  id             uuid primary key default gen_random_uuid(),
  profile_id     uuid not null references public.profiles(id) on delete cascade,
  school         text not null,
  program        text not null,
  supervisor     text not null,
  required_hours numeric(6,2) not null default 486,
  start_date     date not null,
  end_date       date not null,
  status         public.intern_status not null default 'active',
  created_at     timestamptz not null default now()
);

create table public.time_logs (
  id            uuid primary key default gen_random_uuid(),
  intern_id     uuid not null references public.interns(id) on delete cascade,
  log_date      date not null,
  clock_in      time not null,
  clock_out     time not null,
  hours         numeric(4,2) generated always as (
                  extract(epoch from (clock_out - clock_in)) / 3600
                ) stored,
  tasks         text not null,
  status        public.log_status not null default 'pending',
  approved_by   uuid references public.profiles(id),
  approved_at   timestamptz,
  reject_reason text,
  created_at    timestamptz not null default now()
);

create table public.audit_log (
  id           uuid primary key default gen_random_uuid(),
  actor_id     uuid not null references public.profiles(id),
  action       text not null,
  target_table text not null,
  target_id    uuid not null,
  payload      jsonb,
  created_at   timestamptz not null default now()
);

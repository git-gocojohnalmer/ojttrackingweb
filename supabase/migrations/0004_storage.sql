-- 0004_storage.sql — Storage buckets

insert into storage.buckets (id, name, public)
values
  ('avatars', 'avatars', true),
  ('report-assets', 'report-assets', false)
on conflict (id) do nothing;

-- Anyone can read avatars (public bucket)
create policy "avatars: public read" on storage.objects
  for select using (bucket_id = 'avatars');

-- Users can upload their own avatar
create policy "avatars: own upload" on storage.objects
  for insert with check (
    bucket_id = 'avatars' and
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Only admins can access report assets
create policy "report-assets: admin only" on storage.objects
  for all using (bucket_id = 'report-assets' and public.is_admin());

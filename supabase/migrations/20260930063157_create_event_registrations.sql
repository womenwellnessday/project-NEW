/*
# Create event_registrations table

## Purpose
Stores Women Wellness Day event registrations from website visitors.

## New Tables
- `event_registrations`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — registrant's full name
  - `whatsapp` (text, not null) — WhatsApp phone number
  - `email` (text, not null) — email address
  - `ticket_type` (text, not null) — which event(s) they're registering for
  - `created_at` (timestamptz) — submission timestamp

## Security
- RLS enabled. No sign-in required (public registration form), so policies grant
  access to both `anon` and `authenticated` roles.
- Public can INSERT (submit registrations).
- SELECT is restricted to authenticated only to protect personal data.
  Anon users have no reason to read registrations.
*/

CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  whatsapp text NOT NULL,
  email text NOT NULL,
  ticket_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_registrations" ON event_registrations;
CREATE POLICY "public_insert_registrations" ON event_registrations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_registrations" ON event_registrations;
CREATE POLICY "authenticated_select_registrations" ON event_registrations FOR SELECT
  TO authenticated USING (true);

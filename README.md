# DaF Reading Guard

A local browser MVP for German reading assignments with practical anti-copy friction.

## Run

Open `index.html` in a browser. No build step or server is required.

## Publish Online

For a quick static deployment, upload these files to a static host:

- `index.html`
- `styles.css`
- `app.js`

Good simple options are Netlify Drop, GitHub Pages, or Vercel static deployments.

After publishing:

1. Open the teacher URL yourself.
2. Create an assignment.
3. Press `Student link` on the assignment card.
4. Send that copied URL to the student.

The student link opens `?mode=student&locked=1` and hides the teacher/results tabs. It also embeds the assignment data in the URL without the answer key.

## What It Does

- Teachers can use six built-in German reading exercises or create their own.
- Teachers select one active exercise for the student page.
- Students enter their name and answer inside a restricted reading session.
- Exercises support single-answer multiple choice, multi-answer multiple choice, and free writing.
- Built-in free-writing sections require at least 50 words before submission.
- The student passage blocks normal text selection, copy, cut, context menu, common export shortcuts, and paste into answers.
- The app logs tab switches, focus loss, blocked copy attempts, and denied fullscreen requests.
- Results are stored in `localStorage` and can be exported as JSON.

## Limits

This is practical friction, not hard security. A student with control of their device can still photograph the screen, use OCR, retype text, or inspect browser internals. For stronger control, use managed devices, kiosk mode, or a supervised testing environment.

Shared classroom results require the Supabase table and policies below. If Supabase is unavailable or not configured, submissions are still saved locally in the student's browser.

On GitHub Pages, teacher active-exercise selection is stored in the teacher's browser. To control what a student sees on another device, use the `Student link` button for the selected exercise.

## Shared Results With Supabase

The app is configured for Supabase project `https://trbmnjsjgwxphckzvhny.supabase.co`.

Run this SQL in Supabase SQL Editor before using shared results:

```sql
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  assignment_id text not null,
  assignment_title text not null,
  student_name text not null,
  started_at timestamptz,
  finished_at timestamptz,
  finish_reason text,
  answers jsonb not null,
  score jsonb,
  events jsonb default '[]'::jsonb
);

alter table submissions enable row level security;

grant insert on submissions to anon, authenticated;
grant select on submissions to authenticated;

drop policy if exists "students can submit" on submissions;
create policy "students can submit"
on submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "teacher can read submissions" on submissions;
create policy "teacher can read submissions"
on submissions
for select
to authenticated
using (
  auth.jwt() ->> 'email' = 'YOUR_TEACHER_EMAIL@example.com'
);
```

Replace `YOUR_TEACHER_EMAIL@example.com` with the email address of your Supabase teacher user.

Students can submit without login. The teacher must sign in on the Results tab to load shared submissions.

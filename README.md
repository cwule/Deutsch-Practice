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

The static version does not send student submissions back to the teacher automatically. For real classroom use with central results, add a hosted backend and teacher authentication.

On GitHub Pages, teacher active-exercise selection is stored in the teacher's browser. To control what a student sees on another device, use the `Student link` button for the selected exercise.

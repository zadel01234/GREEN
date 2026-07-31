# Daily Dev Log 🟩

A GitHub Actions bot that commits a small daily update to this repo —
a rotating dev tip gets appended to `LOG.md` once a day, which also keeps
your contribution graph active.

## How it works

- `.github/workflows/daily-log.yml` runs on a daily cron schedule (03:00 UTC).
- `scripts/daily-update.js` appends one tip from a rotating list to `LOG.md`,
  picked deterministically based on the day of the year.
- The workflow commits and pushes the change using the built-in
  `GITHUB_TOKEN` — no personal access token needed.

## Setup

1. Create a new repo on GitHub (public or private — see note below).
2. Push these files to it:
   ```bash
   git init
   git add .
   git commit -m "chore: initial daily log bot setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to **Settings → Actions → General → Workflow permissions** in your repo
   and make sure **"Read and write permissions"** is selected. Without this,
   the workflow can't push commits.
4. That's it. The workflow will run automatically on the schedule, or you can
   trigger it manually from the **Actions** tab ("Run workflow" button) to
   test it right away.

## Notes

- **Private repos count too** — go to your GitHub profile → contribution graph
  settings → enable "Include private contributions" if this repo is private.
- **Commit author matters** — this uses the `github-actions[bot]` identity by
  default, which *does* count toward your contribution graph as long as the
  workflow runs under your account's repo. If it doesn't show up, switch the
  git config in the workflow to your own name + a verified GitHub email.
- **Customize the tips** — edit the `tips` array in `scripts/daily-update.js`
  with your own notes, things you've learned, or whatever you want to track.
- Worth being upfront with yourself about this one: a green graph is a nice
  side effect, but it's not a substitute for the actual work. This is really
  just a low-effort way to keep a running log of things you've learned.

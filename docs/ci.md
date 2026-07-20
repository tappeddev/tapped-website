# CI

## What runs

On every pull request (and pushes to `main`), GitHub Actions:

1. Builds the Hugo site
2. Runs Lighthouse on the homepage (3 times, median score)
3. Fails if any category score drops below the floors in `lighthouse-baseline.json`

## Baseline floors

File: [`lighthouse-baseline.json`](../lighthouse-baseline.json)

```json
{
  "performance": 0.58,
  "accessibility": 0.98,
  "best-practices": 1,
  "seo": 1
}
```

Values are `0`–`1` (so `0.58` = score 58).

## Updating scores

When scores improve on purpose and you want to lock in the new floor:

1. Check the new scores from CI (or run Lighthouse locally)
2. Edit `lighthouse-baseline.json` with the new minimums  
   Tip: set performance a bit below the measured score (e.g. measured 80 → floor `0.75`) so CI variance doesn’t flake
3. Commit the change

## Local check

```bash
hugo --gc --minify
npx --yes @lhci/cli@0.14.0 autorun --config=./lighthouserc.json
node scripts/assert-lighthouse-baseline.mjs
```

Osano / Google Tag Manager are blocked during the Lighthouse run so third-party scripts don’t make scores flaky.

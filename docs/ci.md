# CI

## What runs

The workflow in [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs on every pull request, pushes to `main`, and manual dispatches. It:

1. Checks out the repository
2. Downloads Hugo Extended `0.164.0` and verifies its SHA-256 checksum
3. Builds the production site with `hugo --gc --minify`

The `build` check is required on `main`.

## Local check

```bash
hugo --gc --minify
```

# Renovate Configuration setup

This repository contains the default Renovate configuration for all of our repositories.

### Running locally

In order to run Renovate locally, copy the `.envrc-template` to `.envrc` (in order to use this,
install https://direnv.net/), and run `direnv allow` after you populate the values. `RENOVATE_TOKEN` is
the `GITHUB_TOKEN`.

Install Renovate locally with NPM, `npm install -g renovate`. I had to update my git version and ensure a specific node
version (manage node versions with https://github.com/nvm-sh/nvm). After this, I was able to run the following command,
to test the PRs that would be created for a specific repository:

```
renovate --dry-run --autodiscover=true --autodiscover-filter=getstrm/pace 
```

NOTE: Make sure to run this with `--dry-run`, otherwise you'll actually create PRs.

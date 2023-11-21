# Renovate Runner setup

This repository contains the default Renovate configuration for all of our repositories, as well as the scheduled runner that runs Renovate over all of our repositories once a week.

## Development

Make sure you do all changes in the `configs` directory, as we can elaborate certain decisions with comments here, which we cannot do in the `JSON` file. However, at the time of writing, Renovate does [not support](https://github.com/renovatebot/renovate/issues/7674) `JSON5` as a sharable preset config. Therefore, we do a conversion.

### Running locally

In order to run Renovate locally, copy the `.envrc-template` to `.envrc` (in order to use this, install https://direnv.net/), and run `direnv allow` after you populate the values (get them from Gitlab CI, under group `strmprivacy` -> settings -> CI/CD -> Variables). `RENOVATE_TOKEN` is the `GITLAB_TOKEN`.

Install Renovate locally with NPM, `npm install -g renovate`. I had to update my git version and ensure a specific node version (manage node versions with https://github.com/nvm-sh/nvm). After this, I was able to run the following command, to test the PRs that would be created for a specific repository:

```
renovate --dry-run --autodiscover=true --autodiscover-filter=strmprivacy/api-definitions 
```

NOTE: Make sure to run this with `--dry-run`, otherwise you'll actually create PRs/MRs.

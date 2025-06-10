*This is a SvelteKit project adding the needle-engine web component* 

→ [**Live demo**](https://sveltekit-sample-z23hmxbmewty-latest.needle.run/) automatically build and deployed via github actions

## Needle Engine Configuration

- [`needle.config.json`](./needle.config.json)  
  Added the `baseUrl` config to `assets` to change codegen (`src/generated/gen`) to point to the local server relative url!  
- [`svelte.config.js`](./svelte.config.js)  
  Defines `paths.base` for deployment.  
  Uses `adapter-static` currently to produce static pages that can be uploaded anywhere.  
  Adjust it for your needs. Make sure to change the base to the correct path on your domain!  
  For example: if you deploy to `https://test.github.io/my-repository` it should contain `/my-repository`


## Needle Cloud
This repository is setup to automatically deploy to Needle Cloud when pushing to github - just fork and then go to [Settings/Secrets/Actions](settings/secrets/actions) to add a `NEEDLE_CLOUD_TOKEN` repository secret. (Using this [Github Action](./actions/workflows/deploy.yml))

[![Build and Deploy to Needle Cloud](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml/badge.svg)](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml)

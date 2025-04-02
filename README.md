*This is a SvelteKit project adding the needle-engine web component* 

→ [**Live demo**](https://sveltekit-template-z23hmxbwnjve-latest.needle.run/) automatically build and deployed via github actions

## Needle Engine Configuration

- [`needle.config.json`](./needle.config.json)  
  Added the `baseUrl` config to `assets` to change codegen (`src/generated/gen`) to point to the local server relative url!  
- [`svelte.config.js`](./svelte.config.js)  
  Defines `paths.base` for deployment.  
  Uses `adapter-static` currently to produce static pages that can be uploaded anywhere.  
  Adjust it for your needs. Make sure to change the base to the correct path on your domain!  
  For example: if you deploy to `https://test.github.io/my-repository` it should contain `/my-repository`


## Needle Cloud
To automatically deploy to Needle Cloud go to [Settings/Pages](settings/secrets/actions) and add a `NEEDLE_CLOUD_TOKEN` repository secret. A deployment can also be triggered manually on the [Deployment Action page](./actions/workflows/deploy.yml)

[![Build and Deploy to Needle Cloud](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml/badge.svg)](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml)

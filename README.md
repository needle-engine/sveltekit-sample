*This is a SvelteKit project adding the needle-engine web component* 

→ [**Live demo**](https://needle-engine.github.io/sveltekit-sample/) automatically build and deployed via github actions

## Needle Engine Configuration

- [`needle.config.json`](./needle.config.json)  
  Added the `baseUrl` config to `assets` to change codegen (`src/generated/gen`) to point to the local server relative url!  
  Make sure to change the base to the correct path on your domain:  
  For example: if you deploy to `https://test.github.io/my-repository` it should contain `/my-repository`
- [`svelte.config.js`](./svelte.config.js)  
  Defines `paths.base` for deployment.  
  Uses `adapter-static` currently to produce static pages that can be uploaded anywhere. Adjust it for your needs.


## Github Pages Instructions
To use github pages go to [Settings/Pages](settings/pages) and set the **Build and Deployment** source to *Github Actions*. Now you can push new versions to this repository to trigger an automatic build and deployment action to be hosted on github pages. A deployment can also be triggered manually on the [Deployment Action page](./actions/workflows/deploy.yml)

[![Build and Deploy to Pages](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml/badge.svg)](https://github.com/needle-engine/sveltekit-sample/actions/workflows/deploy.yml)

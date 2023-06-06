# nuxt-starter-1

## Description
Beginner's NUXT 3 starter project demonstrating basic client <-> server communication.

## Functions
- Basis-Framework:  NUXT            v3.5
  - CSS-Framework:  Bootstrap       v5.3
  - COM-Framework:  Nuxt Socket.io  v3.0

## Requirements
- Node.JS v18

## Installation
- Clone & install via shell:
```shell
git clone https://github.com/mzaiprog/nuxt-starter-1.git
mv nuxt-starter-1 YourNewProjectName
cd YourNewProjectName & npm install
```

## Usage
### Run dev server: 
```shell
npm run dev
```
- Follow instructions on screen.

### Build client & server for production: 
```shell
npm run build
```
- Notice instructions on screen.

### Locally preview production build:
```shell
npm run preview
```

### Customize configuration

### Follow steps (if you do it on your own)
- Follow: https://nuxt.com/docs/getting-started/installation
  - npx nuxi init nuxt-starter-1
  - cd nuxt-starter-1 & npm install
- Follow: https://stackoverflow.com/questions/70099682/integrating-bootsrap-5-in-nuxt-3-and-vite
  - create /plugins/useBootstrap.client.ts with:
    - import * as bootstrap from "bootstrap";
    - export default defineNuxtPlugin(() => { return { provide: { bootstrap: bootstrap } }; });
  - add to nuxt.config.ts:
    - css: ["bootstrap/dist/css/bootstrap.min.css"] 
- npm install bootstrap
- create /components/BootstrapWelcome.vue: with <template> insert sample code here </template>
  - insert sample HTML code from https://getbootstrap.com/docs/5.3/components/navbar

## Support
Mike Ziebeck: mike@ziebeck.net

## Roadmap
No improvements any further.

## Contributing
Via GitHub issue & pr.

## Authors and acknowledgment
- Mike Ziebeck: mike@ziebeck.net (creator, main-developer)

## License
- MIT

## Project status
Aktive
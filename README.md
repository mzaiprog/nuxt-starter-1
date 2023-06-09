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
### Run dev server: (OK)
```shell
npm run dev
```
- Follow instructions on screen.

### Build client & server for production: *)
```shell
npm run build
```
- Notice instructions on screen.

### Locally preview production build: *)
```shell
npm run preview
```

*) could not get it running properly using:
```shell
node .output/server/index.mjs
```

### Customize configuration
- edit: nuxt.config.ts
- add: server/io/*.js   -> server namespace handlers
- edit: `channel: '/',` -> client namespace addressing

### Follow steps (if you do it on your own) (!)incomlete
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
- create /components/BootstrapWelcome.vue: with `<template>` insert sample code here `</template>`
  - insert sample HTML code from https://getbootstrap.com/docs/5.3/components/navbar
- Follow: https://nuxt-socket-io.netlify.app/installation
  - npm install nuxt-socket-io
  - npm audit fix --force
- Use Messages Component from https://github.com/richardeschloss/nuxt-socket-io/blob/master/components/Messages.vue
  - wget -P components https://raw.githubusercontent.com/richardeschloss/nuxt-socket-io/master/components/Messages.vue
- Use IO handler from https://github.com/richardeschloss/nuxt-socket-io/master/server/io/index.js as default
  - wget -cO - https://raw.githubusercontent.com/richardeschloss/nuxt-socket-io/master/server/io/index.js >server/io.js
- Fix:
  - Messages.vue
    - replace `channel: '/index',` with `channel: '/',`

## Support
Mike Ziebeck: mike@ziebeck.net

## Roadmap
Further improvements, if nuxt-socket-io gets more mature.

## Contributing
Via GitHub issue & pr.

## Authors and acknowledgment
- Mike Ziebeck: mike@ziebeck.net (creator, main-developer)

## License
- MIT

## Project status
Finished so far.
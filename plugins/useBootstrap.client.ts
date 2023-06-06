// Purpose: Provide bootstrap to the client side of the application.
// Source: https://stackoverflow.com/questions/70099682/integrating-bootsrap-5-in-nuxt-3-and-vite

import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})
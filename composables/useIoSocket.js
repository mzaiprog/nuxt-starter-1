export const useIoSocket = () => useNuxtApp().$nuxtSocket({ channel: "/", reconnection: true });

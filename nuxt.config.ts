// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    server: {
        host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost",
        port: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000,
    },
    modules: ["~/lib/module.js"],
    io: {
        sockets: [
            {
                iox: [
                    "chatMessage --> chats/message",
                    "progress --> examples/progress",
                    "examples/sample <-- examples/sample",
                    "examples/someObj", // Bidirectional
                    "bidirectional",
                ],
                namespaces: {
                    "/": {
                        emitters: ["getMessage2 + testMsg --> message2Rxd"],
                        listeners: ["chatMessage2", "chatMessage3 --> message3Rxd"],
                    },
                },
            },
        ],
    },
});

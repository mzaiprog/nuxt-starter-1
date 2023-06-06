export default function Svc(socket, io) {
    console.log("io.js: socket.id: " + socket.id);

    return Object.freeze({
        getItems(ids) {
            return ids;
        },
        getMessage(data) {
            return new Promise((resolve) => {
                socket.emit("bidirectional", "It worked! Received msg: ");
                const msgs = ["Hi, this is a chat message from IO server!", "Hi, this is another chat message from IO server!"];
                let msgIdx = 0;
                const timer = setInterval(() => {
                    if (msgs[msgIdx]) socket.emit("chatMessage", msgs[msgIdx]);
                    if (++msgIdx > msgs.length) {
                        clearInterval(timer);
                        resolve("It worked! Received msg: " + JSON.stringify(data));
                    }
                }, 1000);
            });
        },
        bidirectional(data) {
            console.log("bidirectional rxd!", data);
            return new Promise((resolve) => {
                resolve("It worked! Received msg: " + JSON.stringify(data));
            });
        },
    });
}

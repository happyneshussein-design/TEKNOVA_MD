```js
import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"
import qrcode from "qrcode-terminal"
import fs from "fs"
import config from "./config.js"

const plugins = fs.readdirSync("./plugins").filter(v => v.endsWith(".js"))

async function startBot() {

const { state, saveCreds } = await useMultiFileAuthState("session")

const sock = makeWASocket({
auth: state,
printQRInTerminal: true 
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("connection.update", async (update) => {

const { connection, qr } = update

if (qr) {
qrcode.generate(qr, { small: true })
console.log("Scan QR to connect TEKNOVA_MD")
}

if (connection === "close") {
console.log("Reconnecting...")
startBot()
}

if (connection === "open") {
console.log("✅ TEKNOVA_MD CONNECTED")
}

})

sock.ev.on("messages.upsert", async ({ messages }) => {

const msg = messages[0]
if (!msg.message) return

const text =
msg.message.conversation ||
msg.message.extendedTextMessage?.text

if (!text) return

if (!text.startsWith(config.prefix)) return

const args = text.slice(1).trim().split(" ")
const cmd = args.shift().toLowerCase()

for (const file of plugins) {

const plugin = await import(`./plugins/${file}`)

if (plugin.command.includes(cmd)) {

plugin.default(sock, msg, args, config)

}

}

})

}

startBot()
```

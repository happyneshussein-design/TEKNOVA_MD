import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"
import fs from "fs"
import path from "path"
import config from "./config.js"

const { state, saveCreds } = await useMultiFileAuthState("session")

const sock = makeWASocket({
auth: state,
printQRInTerminal: true
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("messages.upsert", async ({ messages }) => {

const msg = messages[0]
if(!msg.message) return

const text = msg.message.conversation || msg.message.extendedTextMessage?.text

if(!text.startsWith(config.prefix)) return

const args = text.slice(1).trim().split(/ +/)
const cmd = args.shift().toLowerCase()

const pluginFiles = fs.readdirSync("./plugins").filter(f => f.endsWith(".js"))

for(const file of pluginFiles){

const plugin = await import(`./plugins/${file}`)

if(plugin.command.includes(cmd)){

plugin.default(sock,msg,args,config)

}

}

})

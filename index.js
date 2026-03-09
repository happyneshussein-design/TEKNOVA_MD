import makeWASocket,{useMultiFileAuthState} from "@whiskeysockets/baileys"
import qrcode from "qrcode-terminal"
import fs from "fs"
import {config} from "./config.js"

const plugins = fs.readdirSync("./plugins").filter(v=>v.endsWith(".js"))

async function startBot(){

const {state, saveCreds} = await useMultiFileAuthState("session")

const sock = makeWASocket({
 auth: state,
 printQRInTerminal:false
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("connection.update", async (update)=>{

const {connection, qr} = update

if(qr){
qrcode.generate(qr,{small:true})
}

if(connection === "connecting"){

try{

const code = await sock.requestPairingCode(config.ownerNumber)

console.log("\nPAIRING CODE FOR TEKNOVA MD:", code)
console.log("Enter code in WhatsApp > Linked Devices")

}catch(e){}

}

if(connection === "close"){
startBot()
}

})

sock.ev.on("messages.upsert", async ({messages})=>{

const msg = messages[0]
if(!msg.message) return

const text = msg.message.conversation || msg.message.extendedTextMessage?.text
if(!text) return

if(!text.startsWith(config.prefix)) return

const args = text.slice(1).trim().split(" ")
const cmd = args.shift().toLowerCase()

for(const file of plugins){

const plugin = await import(`./plugins/${file}`)

if(plugin.command.includes(cmd)){

plugin.default(sock,msg,args,config)

}

}

})

}

startBot()

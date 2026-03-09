
import axios from "axios"

export const command = ["yt","play","tiktok","fb","insta"]

export default async function(sock,msg,args){

const from = msg.key.remoteJid

if(!args[0]) return sock.sendMessage(from,{text:"❗ Weka link baada ya command"})

sock.sendMessage(from,{text:"⏳ Inajaribu kudownload..."})

// mfano tu (unaweza badili API)
sock.sendMessage(from,{text:`✅ Link imepokelewa: ${args[0]}
Downloader itafanyiwa kazi.`})

}

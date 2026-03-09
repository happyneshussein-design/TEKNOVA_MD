import fs from "fs"

export const command = ["ban","unban"]

export default async function(sock,msg,args){

const from = msg.key.remoteJid
const user = msg.key.participant || msg.key.remoteJid

let data = JSON.parse(fs.readFileSync("./database/ban.json"))

if(args[0] === "ban"){

if(!data.includes(user)) data.push(user)

fs.writeFileSync("./database/ban.json",JSON.stringify(data))

sock.sendMessage(from,{text:"🚫 User banned"})

}

}

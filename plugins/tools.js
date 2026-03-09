export const command = ["qr","translate","weather"]

export default async function(sock,msg,args){

const from = msg.key.remoteJid

sock.sendMessage(from,{text:"🛠️ Tools command imefanya kazi"})

}

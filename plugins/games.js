export const command = ["truth","dare","quiz","math"]

export default async function(sock,msg,args){

const from = msg.key.remoteJid

sock.sendMessage(from,{text:"🎮 Game imeanza!"})

}

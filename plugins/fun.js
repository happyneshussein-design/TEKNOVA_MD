export const command = ["joke","meme","fact"]

export default async function(sock,msg){

const from = msg.key.remoteJid

sock.sendMessage(from,{text:"😂 Hii ni fun command"})

}

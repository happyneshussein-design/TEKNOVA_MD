export const command = ["sticker","s"]

export default async function(sock,msg){

const from = msg.key.remoteJid

sock.sendMessage(from,{text:"🖼️ Tuma picha au video fupi kisha reply na .sticker"})

}

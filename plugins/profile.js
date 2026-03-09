export const command = ["profile","bot"]

export default async function(sock,msg,args,config){

const from = msg.key.remoteJid

await sock.sendMessage(from,{ 
image: { url: "./assets/teknova.jpg" },
caption:`🤖 *${config.botname}*

👑 OWNER: ${config.owner}
📱 NUMBER: ${config.ownerNumber}
🌐 WEBSITE:
${config.website}

📢 Follow the TEKNOVA-MD channel:
${config.channel}

⚡ Ultra WhatsApp Bot
🚀 AI • Downloader • Games • Tools • Group Management`

})

}

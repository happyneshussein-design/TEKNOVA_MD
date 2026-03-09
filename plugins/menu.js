export const command = ["menu","help"]

export default async function(sock,msg,args,config){

const from = msg.key.remoteJid

await sock.sendMessage(from,{text:`
╭━━━〔 🤖 ${config.botname} 〕━━━⬣

👑 OWNER : ${config.owner}
⚡ PREFIX : .

╭─ 👥 GROUP
.add
.kick
.promote
.demote
.tagall
.hidetag
.mute
.unmute
.antilink
.antibot
.warn
.resetwarn
.getpp 

╭─ 🤖 AI
.ai
.gpt
.chat

╭─ ⬇️ DOWNLOAD
.yt
.play
.tiktok
.fb
.insta

╭─ 🎨 MEDIA
.sticker
.toimg
.removebg

╭─ 🛠 TOOLS
.qr
.translate
.weather

╭─ 🎮 GAMES
.truth
.dare
.quiz
.math

╭─ 😄 FUN
.joke
.meme
.fact

╭─ 🚫 MODERATION
.ban
.unban
.profile

🌐 WEBSITE
https://v0-teknova-website-design.vercel.app/

📢 OFFICIAL CHANNEL
Follow the TEKNOVA-MD channel on WhatsApp:
https://whatsapp.com/channel/0029VbCJScD72WTnnyeALu2h

⚠️ Tafadhali follow channel ili kupata updates za bot, commands mpya na tools mpya.

TEKNOVA MD ULTRA 🚀
`})

}

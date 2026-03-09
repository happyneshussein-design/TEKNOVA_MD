import axios from "axios"

export const command = ["ai","gpt","chat"]

export default async function(sock,msg,args){

const from = msg.key.remoteJid

const question = args.join(" ")

if(!question) return sock.sendMessage(from,{text:"Uliza swali baada ya .ai"})

const res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${question}&owner=Teknova&botname=TeknovaMD`)

sock.sendMessage(from,{text:`🤖 ${res.data.response}`})

}

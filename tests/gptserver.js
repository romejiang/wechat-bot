import { getServerReply } from '../src/gptserver/index.js'


console.log("//////");
const answer = await getServerReply('你是谁？', '123456')
console.log("........", answer);
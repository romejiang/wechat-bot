import got from 'got'
import md5 from 'md5'
import dotenv from 'dotenv'
import { remark } from 'remark'
import stripMarkdown from 'strip-markdown'

const env = dotenv.config().parsed // 环境参数

const baseURL = 'http://localhost:3001/api/v1/chat'

export async function getServerReply(prompt, user) {
  const timestamp = new Date().getTime()
  const signStr = sign(timestamp)
  const response = await got
    .post(baseURL, {
      searchParams: {
        appid: env.APPID,
        timestamp,
        sign: signStr,
      },
      json: {
        userid: user,
        content: prompt,
      },
      timeout: {
        request: 20 * 1000,
      },
    })
    .json()
  if (response && response.data) {
    const reply = markdownToText(response.data.answer)
    return reply
  }
  return ''
}
// 签名方法
function sign(timestamp) {
  const appid = env.APPID
  const appkey = env.APPKEY
  const str = `appid=${appid}&appkey=${appkey}&timestamp=${timestamp}`
  return md5(str)
}
// 格式化返回值
function markdownToText(markdown) {
  return remark()
    .use(stripMarkdown)
    .processSync(markdown ?? '')
    .toString()
}

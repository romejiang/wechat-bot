# gptserver 微信机器人

一个 基于 `gptserver` + `wechaty` 的微信机器人

帮助你打造专属的 AI 聊天机器人。

`简单`，`好用`，`2分钟（4 个步骤）` 就能玩起来了。🌸 如果对您有所帮助，请点个 Star ⭐️ 支持一下。


## 运行

1. 确保已经安装了 `nodejs` , 版本需满足 Node.js >= v18.0 ，版本太低会导致运行报错，最好使用 LTS 版本。
2. 先获取自己的 `appid` 和 `appkey`，地址戳这里 👉🏻 ：[创建你的 api key](https://defile.cc/admin/)

3. 创建完了， 复制下来，然后在项目根目录下创建一个 `.env` 文件，内容如下：

```sh
# 执行下面命令，拷贝一份 .env.example 文件
cp .env.example .env
# 修改 .env 文件内容
APPID='你的appid'
APPKEY='你的appkey'
```

4. 运行服务
 
```sh
# 安装依赖
npm i
# 启动服务
npm start
```

然后就可以扫码登录了，然后根据你的需求，自己修改相关逻辑文件。

![](https://assets.fedtop.com/picbed/202212071315670.png)

## 配置聊天白名单

❗️默认不回复任何信息，需要配置白名单

很多人说运行后不会自动收发信息，不是的哈，为了防止给每一条收到的消息都自动回复（消耗token，花费很高），所以加了限制条件。

你要把下面提到的地方自定义修改下：

- 群聊，机器人名称改成你自己微信号的名称，然后添加对应群聊的名称到白名单中，这样就可以自动回复群聊消息了。
- 私聊，记得把需要自动回复的好友名称添加到白名单中，这样就可以自动回复私聊消息了。

文件是 👉🏻 [config.js](./config.js)

![](https://assets.fedtop.com/picbed/202212110942315.png)


## 怎么玩

- 群聊时，在白名单中的群，有人 @你 时会触发自动回复
- 私聊，联系人白名单中的人发消息给你时会触发自动回复

## 运行报错

- 检查 node 版本是否符合，如果不符合，升级 node 版本即可
- 检查依赖是否安装完整，如果不完整，大陆推荐切换下 npm 镜像源，然后重新安装依赖即可。
- npm i -g nrm ，切换源可以使用 nrm 工具 


## 运行 Docker

```sh
$ docker build . -t wechat-bot

$ docker run -d --rm --name wechat-bot -v $(pwd)/config.js:/app/config.js -v $(pwd)/.env:/app/.env wechat-bot
```

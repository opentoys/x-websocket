// 引入http模块
const server = require("http").createServer(handler)
// 自定义事件用于当url访问时触发
const urlEmitter  = require("./event")
// 使用socket.io模块,并注册到http服务
const io = require("socket.io")(server)

// http请求处理
function handler(req,res){
    // 当有请求进入时,将url发送到连接端
    urlEmitter.emit("url",req.url)
    // 当连接端,发送数据时,将数据沿http请求返回
    urlEmitter.on("urldata",(data)=>{
        res.end(data)        
    })
}

// socket处理
io.on("connection",(socket)=>{
    console.log("client is connect")
    // 接收传入的url
    urlEmitter.on("url",(data)=>{
        // 发送到客户端
        socket.emit("url",data)
    })
    // 接收客户端发来的数据
    socket.on("urldata",(data)=>{
        // 触发数据发送,到http请求中
        urlEmitter.emit("urldata",data)
    })
})

// socket断开连接
io.on("disconnect",()=>{
    console.log("client is ending")
})


module.exports=server


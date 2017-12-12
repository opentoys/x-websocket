const server = require("http").createServer(handler)

// 自定义事件用于当url访问时触发
const urlEmitter  = require("./event")

const io = require("socket.io")(server)

function handler(req,res){
    urlEmitter.emit("url",req.url)
    urlEmitter.on("urldata",(data)=>{
        res.end(data)        
    })
}

io.on("connection",(socket)=>{
    console.log("client is connect")
    urlEmitter.on("url",(data)=>{
        socket.emit("url",data)
    })
    socket.on("urldata",(data)=>{
        urlEmitter.emit("urldata",data)
    })
})

io.on("disconnect",()=>{
    console.log("client is ending")
})


module.exports=server


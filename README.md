# x-websocket
利用websocket实现简单的外网映射工具,便于日常调试接口

#### 1. 安装使用 (server)

    # 复制项目
    git clone https://github.com/coderswin/x-websocket.git
    
    # 安装依赖 (修改监听端口,默认为3000)
    npm install 

    # 启动项目
    npm start

#### 2. 配合客户端使用 (client PC)

    npm install x-websocket-cli -g

[使用说明](https://github.com/coderswin/x-websocket-cli)


#### 3. 存在问题

1. 图片等二进制数据传输错误
2. 未实现自动化测试


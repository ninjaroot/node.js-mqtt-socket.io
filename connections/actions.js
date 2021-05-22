var mqtt =  require("../bin/www").mqttclient
var socket_io = require("../bin/www").sockio
var users = [];
// on socket connection
socket_io.on("connection",function(socket){
    console.log("new connection comming ...");
    socket.on("login",function(msg){
        if(users[msg] == undefined) 
             users[msg] = socket;
        
        else
            socket.emit("data" ,"you are already login ..." )
     //when disconnect remove the socket
     socket.on('disconnect', () => { 
     delete users[msg];
    // console.log('topic: '+msg+' disconnected ') 
    });      
  })
})
// mqtt on messaging
mqtt.on("message",function(topic,msg){
   if( users[topic.toString()] != undefined) {
        //send the mqtt message to socket name is = topic
        users[topic.toString()].emit("data" , msg.toString())
    }
})
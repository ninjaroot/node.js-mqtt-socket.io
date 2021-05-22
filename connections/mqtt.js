var mqtt = require('mqtt')
var fs = require('fs')
var path = require('path')
// set port and host to mqtt
var options = {
        port: 1883,
        host: "localhost"
      }


var mqttclient = mqtt.connect(options)

mqttclient.on('connect', function () {
	console.log("MQTT Server Connected ...");
  //mqtt subscripe to all topics
  mqttclient.subscribe('#')
})


module.exports = mqttclient;
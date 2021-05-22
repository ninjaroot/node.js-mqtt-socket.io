var mqtt = require('mqtt')
var fs = require('fs')
var path = require('path')

var options = {
        port: 1883,
        host: "localhost"
      }


var mqttclient = mqtt.connect(options)

mqttclient.on('connect', function () {
	console.log("MQTT Server Connected ...");
  mqttclient.subscribe('#')
})


module.exports = mqttclient;
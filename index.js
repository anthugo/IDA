const Discord = require('discord.js')

var IDA =new Discord.Client({autoReconnect: true});
const PREFIX = "/";
var servers= {};

IDA.on('ready', () => {
    IDA.user.setPresence({ game: {name:'Observer la plebe'}})
   //IDA.setYoutubeKey("AIzaSyBXZb1uoH98Flp4NT5p4aQ3JQpIH8N7ezc");
    console.log("Salut c'est IDA comment ca va les gars");


});
IDA.login('MzkwODkxNjg4MzIwODI3Mzky.DRQugQ.q2Z2KEijx7gge3hfm_AAFefBWLQ');

IDA.on('message', message => {
if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0]){ 
case "salut":
message.channel.sendMessage("salut!!");
break;
case "join":
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.reply('Me voila!!');
      
    })
    .catch(console.log);
} else {
  message.reply('T est simpa mais faut te connecter a un chat avant :issou: ');
}
break;

case "1d100":
message.channel.sendMessage(Math.random() * (99) + 1);
break;


});

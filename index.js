const Discord = require('discord.js')
const YTDL = require("ytdl-core")

var IDA =new Discord.Client({autoReconnect: true});
const PREFIX = "/";
var servers= {};

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0],{filster: "audioonly"}));
  serveur.queue.shift();
  server.dispatcher.on("end", function(){
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();

  });
}

IDA.on('ready', () => {
    IDA.user.setPresence({ game: {name:'Observer la plebe'}})
   //IDA.setYoutubeKey("AIzaSyBXZb1uoH98Flp4NT5p4aQ3JQpIH8N7ezc");
    console.log("Salut c'est IDA comment ca va les gars");


});
IDA.login(process.env.BOT_TOKEN);

IDA.on('message', message => {
if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0]){ 
case "salut":          
message.channel.sendMessage("salut!!");
break;


case "skip":
var server = servers[message.guild.id];

if (server.dispatcher) server.dispatcher.end();
break;

case "leave":
var server = servers[message.guild.id];
if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
break;

case "leave1":
guild.leave()
.then(g => console.log(`Left the guild ${g}`))
.catch(console.error);
break;

case "help":
message.channel.sendMessage("malheuresement cette section n'est pas fini :(");
break;
    
    
case "roll":
  x=args[1];
  y=args[2];
  i=0;
  var T =[];
  while(i<x){
T[i]=Math.round((Math.random()*(y)+1));
    if (T[i]<y+1) {T[i]=y;}
  i=i+1;
  }
  message.channel.sendMessage(T);
break;


    
    
    
case "play":
if (!args[1]){
  message.channel.sendMessage("mettez un lien svp");
  return;
}
if(!message.member.voiceChannel){
  message.channel.sendMessage("il faut etre dans un channel pour ca :'(");
  return;
}
if(!servers[message.guild.id]) servers[message.guild.id] = {
  queue: []
};
var server = servers[message.guild.id];
server.queue.push(args[1]);
if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
  play(connection, message);
});

break;
    
    
    
    

case "join":
if (message.member.voiceChannel) {
  message.member. d.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.reply('Me voila!!');
      
    })
    .catch(console.log);
} else {
  message.reply('T est simpa mais faut te connecter a un chat avant :issou: ');
}
break;
}
});

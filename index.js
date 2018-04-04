const Discord = require('discord.js')
const YTDL = require("ytdl-core")

const broadcast = client.createVoiceBroadcast();
var IDA =new Discord.Client({autoReconnect: true});
const PREFIX = "/";
var servers= {};

//function play(connection, message) {


//  });
//}

IDA.on('ready', () => {
    IDA.user.setPresence({ game: {name:'Observer la plebe'}})
   //IDA.setYoutubeKey(process.env.YOUTUBE_ID);
    console.log("Salut c'est IDA comment ca va les gars");


});
IDA.login(process.env.BOT_TOKEN);

IDA.on('message', message => {
if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");


//Ici quand !---- il fait ce qui est dit
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
T[i]=Math.trunc((Math.random()*(y)+1));
    if (T[i]>y) {T[i]=y;}
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
if(message.member.voiceChannel){
  message.member. d.join()
  .then(connection => {
const stream = ytdl(arg[1], { filter : 'audioonly' });
broadcast.playStream(stream);
const dispatcher = connection.playBroadcast(broadcast);
})
};

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
const Discord = require('discord.js')
const YTDL = require("ytdl-core")

const broadcast = client.createVoiceBroadcast();
var IDA =new Discord.Client({autoReconnect: true});
const PREFIX = "/";
var servers= {};

//function play(connection, message) {


//  });
//}

IDA.on('ready', () => {
    IDA.user.setPresence({ game: {name:'Observer la plebe'}})
   //IDA.setYoutubeKey(process.env.YOUTUBE_ID);
    console.log("Salut c'est IDA comment ca va les gars");


});
IDA.login(process.env.BOT_TOKEN);

IDA.on('message', message => {
if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");


//Ici quand !---- il fait ce qui est dit
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
T[i]=Math.trunc((Math.random()*(y)+1));
    if (T[i]>y) {T[i]=y;}
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
if(message.member.voiceChannel){
  message.member. d.join()
  .then(connection => {
const stream = ytdl(arg[1], { filter : 'audioonly' });
broadcast.playStream(stream);
const dispatcher = connection.playBroadcast(broadcast);
})
};

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

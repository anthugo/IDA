const Discord = require('next/require')('discord.js')

var IDA =new Discord.Client({autoReconnect: true});
var prefix = ("/");
var servers= {};

IDA.on('ready', () => {
    IDA.user.setPresence({ game: {name:'Observer la plebe'}})
   //IDA.setYoutubeKey("AIzaSyBXZb1uoH98Flp4NT5p4aQ3JQpIH8N7ezc");
    console.log("Salut c'est IDA comment ca va les gars");


});
IDA.login('process.env.TOKEN');

IDA.on('message', message => {
    if (message.content === "/salut"){
        message.channel.sendMessage("Salut");
        console.log('salut');
    }
    if (!message.guild) return;
    
      if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              message.reply('Me voila!!');
              
            })
            .catch(console.log);
        } else {
          message.reply('You need to join a voice channel first!');
        }
      }
      if (message.content === '/discon') {

      
      }

});

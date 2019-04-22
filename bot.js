
// Import the discord.js module
const Discord = require('discord.js');
const fs = require('fs');
// Create an instance of a Discord client
const client = new Discord.Client();


const { prefix, token } = require('./config.json');
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
// Create an event listener for messages
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase(); 
if (command === 'slots'){
var wins = 0;
slotroller();
//TODO: Add currency for betting system, let user choose how many times they want to roll

//this function will call slotroll 3 times and say how many times the user won, until I allow the user to choose how many times they want to roll
function slotroller(){
slotroll();
slotroll();
slotroll();
message.channel.send(`${message.author}, you won ` + wins + " times out of " + "3" + ". Congratulations!");
wins = 0;
}
function slotroll() {
var slot= [":chicken:", ":moneybag:", ":fire:", ":bulb:", ":credit_card:", ":100:"];
var r1 = slot[Math.floor(Math.random()*slot.length)];
var r2 = slot[Math.floor(Math.random()*slot.length)];
var r3 = slot[Math.floor(Math.random()*slot.length)];
message.channel.send(r1+r2+r3);
if (r1 === r2 && r1 === r3){

wins++;
} 

}






}

});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(token);


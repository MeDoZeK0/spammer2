const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("586699502795227136")
setInterval(function() {
channel.send(`وانا كمان`);
}, 30)
})

client.login("NDkwNjE1ODAwOTkwNzkzNzQ0.XPr3FA.F27AVxEZp37qv9VKcuz7VyXX-oc");

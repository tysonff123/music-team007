const {Client, intents, WebhookClient, MessageEmbed, MessageActionRow, MessageButton, Collection} = require("discord.js");
const { readdirSync } = require("fs");
const express = require(`express`);
const Discord = require('discord.js');

const db = require(`./main/schema/prefix`);

const webhook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1032634961125187614/jVmOQveWTi2dOI5gdpA5I1CCEX2EgoNhWzJa1kuqVGpvKUDXYjbBpe3cAcqY_vdhgQSM' }); 

const client = new Client({
 
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    shards: `auto` ,
    presence: {
      status: `idle`,
      activities: [{
        name: '?help | /help', //#fd6260
        type: `STREAMING`,
        url: 'https://www.twitch.tv/nikhil_sai_p'
      }]
    },
    fetchAllMembers: false,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    disableEveryone: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});



module.exports = client;
client.commands = new Collection();
client.tyson = new Collection();
client.sls = new Collection();
client.config = require("./config.json");
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.commands = new Collection();
client.cooldowns = new Collection(); 
client.emoji = require("./main/utils/emoji.json");
require("./main/handler/Client")(client);
require('events').EventEmitter.defaultMaxListeners = 1000;
process.setMaxListeners(1000);
client.login(client.config.token);



process.on('unhandledRejection', (error) => {
  webhook.send(`\`\`\`js\n${error.stack}\`\`\``)
});
process.on("uncaughtException", (err, origin) => {
  webhook.send(`\`\`\`js\n${err.stack}\`\`\``)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  webhook.send(`\`\`\`js\n${err.stack}\`\`\``)
});
process.on('beforeExit', (code) => {
  webhook.send(`\`\`\`js\n${code}\`\`\``)
});
process.on('exit', (code) => {
  webhook.send(`\`\`\`js\n${code}\`\`\``)
});
process.on('multipleResolves', (type, promise, reason) => {
});

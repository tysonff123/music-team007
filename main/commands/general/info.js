const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const moment = require('moment');
const Discord = require("discord.js")
const bytes = require("bytes")

module.exports = {
  name: "info",
  category: "general",
  description: "Shows the stasts of the bot.",
  execute: async (message, args, client, prefix) => {

   
    let ok = client.emoji.ok;
    let no = client.emoji.no;
    let star = client.emoji.star

    let users = await client.users.cache.size;
    let servers = await client.guilds.cache.size;
   
   
    const memusage = process.memoryUsage();
    const { totalMemMb, usedMemMb } = await mem.info();
    
    const d = moment.duration(client.uptime);
      const days = (d.days() == 1) ? `${d.days()}d` : `${d.days()}d`;
      const hours = (d.hours() == 1) ? `${d.hours()}h` : `${d.hours()}h`;
      const minutes = (d.minutes() == 1) ? `${d.minutes()}m` : `${d.minutes()}m`;
      const seconds = (d.seconds() == 1) ? `${d.seconds()}s` : `${d.seconds()}s`;
      const up = `${days}, ${hours}, ${minutes}, and ${seconds}`;

        
        const statsEmbed = new MessageEmbed()
        .setColor(client.embedColor)
        .setAuthor(`Team 007`, message.member.user.displayAvatarURL({ dynamic: true}))
           
     
        .addFields (
            { name: `    Servers  `, value: `Total: ${users} servers`, inline: true },
            { name: `   Users  `, value: `Total: ${servers} users`, inline: true },
            { name: `   Node Version  `, value: `v${process.versions.node}`, inline: true },
            { name: `   Discord.js  `, value: `13.7.0`, inline: true },
            { name: `   Bot Memory  `, value: `${Math.round(memusage.heapUsed / 1024 / 1024)}/${Math.round(memusage.heapTotal / 1024 / 1024)}mb`, inline: true },
            { name: `   Uptime  `, value: `${up}`, inline: true },
            { name: `   System Memory  `, value: `${bytes(bytes(`${usedMemMb}MB`))}`, inline: true },
            { name: `   Players  `, value: `${client.manager.nodes.values().next().value.stats.players}`, inline: true },
            { name: `   Owners  `, value: `\nTeam 007\n`, inline: true }
        
        )
        return message.channel.send({embeds : [statsEmbed]})
    }
}
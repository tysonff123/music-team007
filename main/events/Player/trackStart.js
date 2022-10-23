const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const db = require("quick.db")
module.exports = async (client, player, track, res) => {
     
const row = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setStyle("SECONDARY")
 .setEmoji(`<:pause:1033708173481218059>`)
    .setCustomId("prtrack"),
    new MessageButton()
.setStyle("SECONDARY")
.setEmoji(`<:skip:1033708347406438440>`)
.setCustomId("skiptrack"),
new MessageButton()
.setStyle("SECONDARY")
.setEmoji(`<:looping:1033708433041526845>`)
.setCustomId("looptrack"),
new MessageButton()
.setStyle("SECONDARY")
.setEmoji(`<:Stop:1033708495360512090>`)
.setCustomId("stop"),
);

const channel = client.channels.cache.get(player.textChannel);

const song = player.queue.current
    const thing = new MessageEmbed()
  .setAuthor(`Now Playing`, client.user.displayAvatarURL())
    .setDescription(`[${track.title}](https://discord.gg/pXnYt3tYzp)  [${!song.isStream ? `${new Date(song.duration).toISOString().slice(11, 19)}` : '◉ LIVE'}]`)
        .setColor(client.embedColor)
    return channel.send({embeds: [thing],
         components: [row]}).then(msg => {
            
            if (player.get(`playingsongmsg`) && msg.id !== player.get(`playingsongmsg`).id) {
              player.get(`playingsongmsg`).delete().catch(e => { }) 
            }
            player.set(`playingsongmsg`, msg)
          
        })
    
    

}

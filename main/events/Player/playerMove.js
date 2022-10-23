const { MessageEmbed, MessageActionRow, MessageButton, Collection } = require("discord.js");
module.exports = async (client, player, oldChannel, newChannel) => {
	
	const guild = client.guilds.cache.get(player.guild)
	if(!guild) return;
	const channel = guild.channels.cache.get(player.textChannel);
	  if(oldChannel === newChannel) return;
	  if(newChannel === null || !newChannel) {
	  if(!player) return;
	  if(channel) {
		  
		try{
		player.get(`playingsongmsg`).delete()
		}catch(e)
		{
		
			return player.destroy();
		}

	  player.setQueueRepeat(false);
	   return player.destroy();
	  }
	 
	} else {
	  player.voiceChannel = newChannel
	  setTimeout( () => {	       	  player.pause(false)   }, 100)
    
	}
	let oppp = new MessageEmbed()

	.setColor(client.embedColor)
	.setTitle(`Player has been moved`)
	.setDescription(`I have been moved from <#${oldChannel}> to <#${newChannel}>`)
	channel.send({embeds : [oppp]}).then(msg => { setTimeout(() => { msg.delete() }, 10000) });
}
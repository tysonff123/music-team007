const delay = require("delay");

const ms = require('ms');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = async (client, player) => {
	const channel = client.channels.cache.get(player.textChannel);
	player.get(`playingsongmsg`).delete().catch({ }) 

	let queuecomplete = new MessageEmbed()

	.setColor(client.embedColor)
	.setAuthor(`Queue More Songs And Enjoy`,`https://discord.gg/pXnYt3tYzp`)
	channel.send({embeds : [queuecomplete]});

}

const { MessageEmbed } = require("discord.js");

module.exports = async (client, player, track, payload) => {
    

    player.stop();
    const channel = client.channels.cache.get(player.textChannel);
    const thing = new MessageEmbed()
    .setColor("RED")
        .setDescription(`I Got A Error While Playing - [${track.title}](https://discord.gg/pXnYt3tYzp)`)
    channel.send({embeds: [thing]});


    if (!player.voiceChannel) player.destroy();

}

const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'play',
  category: 'music',
  aliases: ["p","padu"],
  description: 'plays some high quality music for you',
  execute: async (message, args, client, prefix) => {
     
    let ok = client.emoji.ok;
    let no = client.emoji.no;
    

    const query = args.join(' ');
    if (!args[0]) {
        const ppp = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`${no} You need to give me a URL or a Search term.`)
        return message.channel.send({embeds: [ppp]});
      }
      const { channel } = message.member.voice;
      if (!channel) {
                      const noperms = new MessageEmbed()
                
           .setColor(client.embedColor)
             .setDescription(`${no} You must be connected to a voice channel to use this command.`)
          return await message.channel.send({embeds: [noperms]});
      }
      if(message.member.voice.selfDeaf) {	
        let thing = new MessageEmbed()
         .setColor(client.embedColor)

       .setDescription(`${no} <@${message.member.id}> You cannot run this command while deafened.`)
         return await message.channel.send({embeds: [thing]});
       }

       let player = client.manager.get(message.guildId);
       const botchannel = message.guild.me.voice.channel;
       if(player && channel.id !== player.voiceChannel) {
         const noperms = new MessageEmbed()
             .setColor(client.embedColor)
  .setDescription(`${no} You must be connected to ${botchannel}`)
   return await message.channel.send({embeds: [noperms]});
   }

   

  if (!player) player = client.manager.create({
    guild: message.guildId,
    textChannel: message.channelId,
    voiceChannel: message.member.voice.channelId,
    selfDeafen: true,
  });
  const s = await player.search(query, message.user);
  if (s.loadType === `${no} LOAD_FAILED`) {
    if (player && !player.queue.current) player.destroy();
    return await message.channel.send({
      content: `${no} Error while Loading track.`
    }).catch(() => {});
} else if (s.loadType === "NO_MATCHES") {
    if (player && !player.queue.current) player.destroy();
    return await message.channel.send({
      content: `${no} No results found, try to be specific as possible.`
    }).catch(() => {});
} else if (s.loadType === "NO_MATCHES") {
    if (player && !player.queue.current) player.destroy();
    return await message.channel.send({
      content: `${no} No results found, try to be specific as possible.`
    }).catch(() => {});
} else if (s.loadType === "TRACK_LOADED") {
    if (player && player.state !== "CONNECTED") player.connect();
    if (player) player.queue.add(s.tracks[0]);
    if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) player.play();
    return await message.channel.send({
      embeds: [new MessageEmbed() .setColor(client.embedColor)
        .setDescription(`Queued [${s.tracks[0].title}](https://discord.gg/pXnYt3tYzp)`)]
    }).catch(() => {});
} else if (s.loadType === "PLAYLIST_LOADED") {
    if (player && player.state !== "CONNECTED") player.connect();
    if (player) player.queue.add(s.tracks);
    if (player && player.state === "CONNECTED" && !player.playing && !player.paused && player.queue.totalSize === s.tracks.length) player.play();

    return await message.channel.send({
      embeds: [new MessageEmbed().setColor(client.embedColor)
      .setDescription(`Queued **${s.tracks.length}** tracks from **${s.playlist.name}** - [\`${message.member.user.tag}\`]`)]
    }).catch(() => {})
} else if (s.loadType === "SEARCH_RESULT") {
    if (player && player.state !== "CONNECTED") player.connect();
    if (player) player.queue.add(s.tracks[0]);
    if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) player.play();
    return await message.channel.send({
      embeds: [new MessageEmbed().setColor(client.embedColor)
        .setDescription(`Queued [${query}](https://discord.gg/pXnYt3tYzp)`)]
    }).catch(() => {});
 
  
}
  }
}
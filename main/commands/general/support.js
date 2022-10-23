const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = {
  name: "support",
  category: "general",
  description: "Gives the support server link.",

  execute: async (message, args, client, prefix) => {

    let ok = client.emoji.ok;
    let no = client.emoji.no;
   
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
  .setLabel("Support Server")
  .setStyle("LINK")
  .setURL(`https://discord.gg/pXnYt3tYzp`),
    );

        const mainPage = new MessageEmbed()
        .setDescription(`[Team 007](https://discord.gg/pXnYt3tYzp) Link.`)
        .setColor(client.embedColor)
        return message.channel.send({embeds : [mainPage], components : [row]})
    }
}
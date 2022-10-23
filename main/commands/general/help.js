const { Client} = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../../config.json").prefix;

module.exports = {
  name: "help",
  category: "general",
  description: "Shows the help menu / commands list of the bot. ",
  owner: false,
  wl : true,
  execute: async (message, args, client, prefix) => {

   
    let ok = client.emoji.ok;
    let no = client.emoji.no;
    const em = args.join(" ");
    if(!em){

    let categories = [];

    readdirSync("./main/commands/").forEach((dir) => {
      const commands = readdirSync(`./main/commands/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );
      if(dir === "owner") return;
      const cmds = commands.map((command) => {
        let file = require(`../../commands/${dir}/${command}`);

        if (!file.name) return "No command name.";

        let name = file.name.replace(".js", "");
        let description = file.description;

        return `\`${name}\``;
      });

      let data = new Object();

      data = {
        name: `${dir} [${cmds.length}]`,
        value: cmds.length === 0 ? "In progress." : cmds.join(", "),
      };

      categories.push(data);
    });

    
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
  .setLabel("Support Server")
  .setStyle("LINK")
  .setURL(`https://discord.gg/pXnYt3tYzp`),
    );

    const embed = new MessageEmbed()
    .addFields(categories)
    .setDescription(`I'm A Bot Developed By Team 007. It supports Spotify, YouTube, Soundcloud and more!`)
      .setColor(client.embedColor)
  

.setColor(client.embedColor)
message.channel.send({embeds : [embed], components : [row]})
    }
    else {
        const command =
        client.sls.get(em) 
        if (!command) {
          const embed = new MessageEmbed()
          .setDescription(`Couldn't find matching command name.`)
          .setColor(client.embedColor)
          return message.channel.send({ embeds: [embed] });
        }
  
        const embed = new MessageEmbed()
      .setDescription(` Aliases: ${command.aliases
        ? `\`${command.aliases.join("` `")}\``
        : "No aliases for this command."}\n Usage: ${command.usage
          ? `\`${prefix}${command.name} ${command.usage}\``
          : `not found`}\n Description: ${command.description
            ? command.description
            : "No description for this command."}`)
        .setColor(client.embedColor)
        return message.channel.send({ embeds: [embed] });
      }//
    
  
},
}
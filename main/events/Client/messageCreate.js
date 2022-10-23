const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const db = require('../../schema/prefix.js');
const owners = require(`../../../config.json`);
module.exports = async (client, message) => {

  let no = client.emoji.no
  let ok = client.emoji.ok
let prefix;
let data = await db.findOne({ Guild: message.guild.id });
if (!data) { prefix = client.prefix; } else { prefix = data.Prefix; }
        message.guild.prefix = prefix;

  if (message.author.bot) return;
  if (!message.guild) return;
 
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(mention)) {
    const row = new MessageActionRow()
    .addComponents(
  new MessageButton()   
  .setLabel("Support Server")
  .setStyle("LINK")
  .setURL(`https://discord.gg/pXnYt3tYzp`),
    );
    const embed = new MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Hello Mr.${message.member.user.username} , I'm ${client.user.username}\n\nMy prefix for this server is \`${prefix}\`do \`${prefix}help\` or \`/help\` for more information`);

    message.channel.send({embeds : [embed],components:[row]})
  }
  const ress = await db.findOne({ Guild: message.guildId });
  if (ress && ress.Prefix) prefix = ress.Prefix;

    const escapeRegex = (prefix) => {
      return prefix.replace(/[.*+?^${}()|[\]\\]/, `\\$&`);
    };
  const mentionprefix = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})`
  );
  if (!mentionprefix.test(message.content)) return;
  const [, content] = message.content.match(mentionprefix);
  const args = message.content.slice(content.length).trim().split(/ +/);
  const commandName = args.length > 0 ? args.shift().toLowerCase() : null;


  const command = client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  
  if (!command) return;

 //owner only
  if(command.owneronly){
  if(Owners.includes(message.member.id))
return;
  }
//dj only
  if (command.djonly) {
  const djSchema = require('../../schema/djroleSchema')
  let djdata = await djSchema.findOne({
      guildID: message.guild.id,
  })
      if(djdata && !message.member.roles.cache.has(djdata.Roleid)) {

    const embed = new MessageEmbed()
         .setColor(client.embedColor)
        .setDescription(`${no} <@${message.member.id}> This command requires you to have ${djdata.Roleid}.`)
         return await message.channel.send({embeds: [embed]}).then(responce => {
           setTimeout(() => {
               try {
                   responce.delete().catch(() => {
                       return
                   })
               } catch(err) {
                   return
               }
           }, 12000)
       });;
   }
  }

//error 
  try {
    command.execute(message, args, client, prefix);
  } catch (error) {
    console.log(error);
    embed.setDescription("There was an error while executing the command.\n My developers will sort out this issue.");
    return message.channel.send({ embeds: [embed] });
  }
}






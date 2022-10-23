const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms")
const empty_begining = "["
const emptyend = "]"
const emptyframe  = "keep a emoji"
const filled = "keep a emoji"


function getMember(message, toFind = "") {
  try {
    toFind = toFind.toLowerCase();
    let target = message.guild.members.get(toFind);
    if (!target && message.mentions.members) target = message.mentions.members.first();
    if (!target && toFind) {
      target = message.guild.members.find((member) => {
        return member.displayName.toLowerCase().includes(toFind) || member.user.tag.toLowerCase().includes(toFind);
      });
    }
    if (!target) target = message.member;
    return target;
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}

function shuffle(a) {
  try {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}

function formatDate(date) {
  try {
    return new Intl.DateTimeFormat("en-US").format(date);
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}

function duration(ms) {
  const sec = Math.floor((ms / 1000) % 60).toString();
  const min = Math.floor((ms / (60 * 1000)) % 60).toString();
  const hrs = Math.floor((ms / (60 * 60 * 1000)) % 60).toString();
  const days = Math.floor((ms / (24 * 60 * 60 * 1000)) % 60).toString();
  return `${days}Days,${hrs}Hours,${min}Minutes,${sec}Seconds`;
}



function delay(delayInms) {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}

//get a randomnumber between 0 and x
function getRandomInt(max) {
  try {
    return Math.floor(Math.random() * Math.floor(max));
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
//random number between y and x
function getRandomNum(min, max) {
  try {
    return Math.floor(Math.random() * Math.floor((max - min) + min));
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
function createBar(player) {
    //if u want change emojis 
  try{
    let size = 15;
    if (!player.queue.current) return `**${empty_begining}${filled}${filed.repeat(size - 1)}${emptyend}**\n**00:00:00 / 00:00:00**`;
    let current = player.queue.current.duration !== 0 ? player.position : player.queue.current.duration;
    let total = player.queue.current.duration;
    let rightside = size - Math.round(size * (current / total));
    let leftside = Math.round(size * (current / total));
    let bar;
    if (leftside < 1) bar = String(empty_begining) + String(emptyframe).repeat(rightside) + String(emptyend);
    else bar = String(empty_begining) + String(filled).repeat(leftside) + String(emptyframe).repeat(rightside) + String(size - rightside !== 1 ? emptyend : emptyend);
    return `**${bar}**\n**${!player.queue.current.isStream ? `**${new Date(player.position).toISOString().substr(11, 8)} / ${new Date(player.queue.current.duration).toISOString().slice(11, 19)}**` : '`◉ LIVE`'}**`;
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
}

function format(millis) {
  try {
    var h = Math.floor(millis / 3600000),
      m = Math.floor(millis / 60000),
      s = ((millis % 60000) / 1000).toFixed(0);
    if (h < 1) return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + "" + (Math.floor(millis / 1000)) + " Seconds";
    else return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + "" + (Math.floor(millis / 1000)) + " Seconds";
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
function databasing(client, guildid, userid) {
  try {
    client.stats.ensure("global", {
      commands: 0,
      songs: 0,
      setups: 0
    });
    if (guildid) {
      client.stats.ensure(guildid, {
        commands: 0,
        songs: 0
      });
      client.setups.ensure(guildid, {
        textchannel: "0",
        voicechannel: "0",
        category: "0",
        message_cmd_info: "0",
        message_queue_info: "0",
        message_track_info: "0"
      });
      client.settings.ensure(guildid, {
        prefix: config.prefix,
        pruning: true,
        requestonly: true,
        djroles: [],
        djonlycmds: ["autoplay", "clearqueue", "forward", "loop", "jump", "loopqueue", "loopsong", "move", "pause", "resume", "removetrack", "removedupe", "restart", "rewind", "seek", "shuffle", "skip", "stop", "volume"],
        botchannel: [],
      });
    }
    if (userid) {
      client.premium.ensure(userid, {
        enabled: false,
      })
      client.queuesaves.ensure(userid, {
        "TEMPLATEQUEUEINFORMATION": ["queue", "sadasd"]
      });
    }
    if (userid && guildid) {
      client.userProfiles.ensure(userid, {
        id: userid,
        guild: guildid,
        totalActions: 0,
        warnings: [],
        kicks: []
      });
    }
    return;
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
function escapeRegex(str) {
  try {
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}

function arrayMove(array, from, to) {
  try {
    array = [...array];
    const startIndex = from < 0 ? array.length + from : from;
    if (startIndex >= 0 && startIndex < array.length) {
      const endIndex = to < 0 ? array.length + to : to;
      const [item] = array.splice(from, 1);
      array.splice(endIndex, 0, item);
    }
    return array;
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
async function promptMessage(message, author, time, validReactions) {
  try {
    time *= 1000;
    for (const reaction of validReactions) await message.react(reaction);
    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;
    return message.awaitReactions(filter, {
      max: 1,
      time: time
    }).then((collected) => collected.first() && collected.first().emoji.name);
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
async function autoplay (client, player, type) {
  try {
    if (player.queue.size > 0) return;
    const previoustrack = player.get("previoustrack");
    if (!previoustrack) return;

    const mixURL = `https://www.youtube.com/watch?v=${previoustrack.identifier}&list=RD${previoustrack.identifier}`;
    const response = await client.manager.search(mixURL, previoustrack.requester);
    if (!response || response.loadType === 'LOAD_FAILED' || response.loadType !== 'PLAYLIST_LOADED') {
      let embed = new MessageEmbed()
        .setTitle("❌ ErrorFound nothing related for the latest Song!")
        .setDescription(config.settings.LeaveOnEmpty_Queue.enabled && type != "skip" ? `I'll leave the Channel: ${client.channels.cache.get(player.voiceChannel).name} in: ${ms(config.settings.LeaveOnEmpty_Queue.time_delay, { long: true })} If the Queue stays Empty! ` : `I left the Channel: ${client.channels.cache.get(player.voiceChannel).name} because the Queue was empty for: ${ms(config.settings.LeaveOnEmpty_Queue.time_delay, { long: true })}`)
        .setColor(ee.wrongcolor)
        .setFooter(ee.footertext, ee.footericon);
      client.channels.cache.get(player.textChannel).send(embed);
      if (config.settings.LeaveOnEmpty_Queue.enabled && type != "skip") {
        return setTimeout(() => {
          try {
            player = client.manager.players.get(player.guild);
            if (player.queue.size === 0) {
              let embed = new MessageEmbed()
              try {
                embed.setTitle(" Queue has been ended.")
              } catch {}
              try {
                embed.setDescription(`I left the Channel: ${client.channels.cache.get(player.voiceChannel).name} because the Queue was empty for: ${ms(config.settings.LeaveOnEmpty_Queue.time_delay, { long: true })}`)
              } catch {}
              try {
                embed.setColor(ee.wrongcolor)
              } catch {}
              try {
                embed.setFooter(ee.footertext, ee.footericon);
              } catch {}
              client.channels.cache
                .get(player.textChannel)
                .send(embed)
              try {
                client.channels.cache
                  .get(player.textChannel)
                  .messages.fetch(player.get("playermessage")).then(msg => {
                    try {
                      msg.delete({
                        timeout: 7500
                      }).catch(e => console.log("couldn't delete message".grey));
                    } catch {
                      /* */ }
                  });
              } catch (e) {
                console.log(String(e.stack).yellow);
              }
              player.destroy();
            }
          } catch (e) {
            console.log(String(e.stack).yellow);
          }
        }, config.settings.LeaveOnEmpty_Queue.time_delay);
      } else {
        player.destroy();
      }
    }
    player.queue.add(response.tracks[Math.floor(Math.random() * Math.floor(response.tracks.length))]);
    return player.play();
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}
async function isrequestchannel(client, channelid, guildid) {
    
    
    if (client.setups.get(guildid, "textchannel") !== "0") {
      try{
        
        let channel = await client.channels.fetch(String(client.setups.get(guildid, "textchannel"))).catch(e=>{return false;});
        
        if (!channel) {
          return false;
        }
        
        if (channel.id === channelid) {
          return true;
        } else {
          return false;
        }
      }catch {
        return false;
      }
    }
    else {
      return false;
    }
}

  
  module.exports.getMember = getMember 
  module.exports.shuffle = shuffle;
  module.exports.formatDate = formatDate;
  module.exports.duration = duration;
  module.exports.promptMessage = promptMessage;
  module.exports.delay = delay;
  module.exports.getRandomInt = getRandomInt;
  module.exports.getRandomNum = getRandomNum;
  module.exports.createBar = createBar;
  module.exports.format = format;
 // module.exports.stations = stations;
  module.exports.databasing = databasing;
  module.exports.escapeRegex = escapeRegex;
  module.exports.autoplay = autoplay;
  module.exports.arrayMove = arrayMove;
  module.exports.isrequestchannel = isrequestchannel;
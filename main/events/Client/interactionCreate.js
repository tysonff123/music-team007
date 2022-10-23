const { MessageEmbed, CommandInteraction, Client, MessageButton , MessageActionRow} = require("discord.js")
const { queuepaginationEmbed } = require('../../utils/pagination.js');
const { convertTime } = require('../../utils/convert.js');
const owners = ["897442547511734272"];

let chunk = require('chunk');
    module.exports = async (client, interaction) => {
          
    let ok = client.emoji.ok;
    let no = client.emoji.no;

    if(interaction.isCommand()) {
        const SlashCommands = client.sls.get(interaction.commandName);
        if(!SlashCommands) return;
    if(SlashCommands.djonly){
    const djSchema = require('../../schema/djroleSchema')
    let djdata = await djSchema.findOne({
        guildID: interaction.guild.id,
    });
        if(djdata && !interaction.member.roles.cache.has(djdata.Roleid) ) {

      const embed = new MessageEmbed()
           .setColor(client.embedColor)
       .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
           return await interaction.reply({embeds: [embed], ephemeral: true});
     }
    }
    
}

if(interaction.isCommand()) {
    const SlashCommands = client.sls.get(interaction.commandName);
    if(!SlashCommands) return;

}
        if (interaction.customId === 'evaldelete') {
            await interaction.deferReply({
                ephemeral: true
              });
           
            if(!ownerids.includes(interaction.member.id)) {
                const noperms = new MessageEmbed()
         .setColor(client.embedColor)
         .setDescription(`This Button Is For Owners`)
         return interaction.editReply({embeds: [noperms]})
               }
       return interaction.message.delete()
        }

        // loop track 
        if (interaction.customId === 'looptrack') {

            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }

            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
            
                .setColor(client.embedColor)
                  .setDescription(`You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
            
                .setColor(client.embedColor)
                .setDescription(`There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
        .setColor(client.embedColor)
               .setDescription(`You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            player.setQueueRepeat(!player.queueRepeat);
            const trackRepeat = player.queueRepeat ? "enabled" : "disabled";
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`looping the queue is now \`${trackRepeat}\`. By -  <@!${interaction.member.id}>`)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });

        }


        //shuffle
        if (interaction.customId === 'shuffle') {
    
            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)
            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()

                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
                .setColor(client.embedColor)
               .setDescription(` You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            player.queue.shuffle();
            let thing = new MessageEmbed()
        
                .setDescription(`he queue has been shuffled. - By <@!${interaction.member.id}>`)
                .setColor(client.embedColor)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });
                
        }




            //volume down
        if (interaction.customId === 'voldown') {
    
            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
   //
  
      const { channel } = interaction.member.voice;
      if (!channel) {
                      const noperms = new MessageEmbed()
                     
           .setColor(client.embedColor)
             .setDescription(` You must be connected to a voice channel to use this button`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
      if(interaction.member.voice.selfDeaf) {	
        let thing = new MessageEmbed()
         .setColor(client.embedColor)

       .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
         return await interaction.followUp({embeds: [thing],ephemeral: true});
       }
      const botchannel = interaction.guild.me.voice.channel;
      const player = client.manager.players.get(interaction.guild.id);
      if(!player || !botchannel || !player.queue.current) {
                      const noperms = new MessageEmbed()

           .setColor(client.embedColor)
           .setDescription(` There is nothing playing in this server.`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
      if(player && channel.id !== player.voiceChannel) {
                                  const noperms = new MessageEmbed()
             .setColor(client.embedColor)
          .setDescription(` You must be connected to the same voice channel as me.`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
		
     
      player.setVolume(player.volume - 10);
      let thing = new MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Player volume set to ${player.volume}%`)
    return await interaction.channel.send({ embeds: [thing] }).then(responce => {
        setTimeout(() => {
            try {
                responce.delete().catch(() => {
                    return
                })
            } catch(err) {
                return
            }
        }, 5000)
    });
                
        }
        

        //volume up
        if (interaction.customId === 'volup') {
    
            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
   //
  
      const { channel } = interaction.member.voice;
      if (!channel) {
                      const noperms = new MessageEmbed()
                     
           .setColor(client.embedColor)
             .setDescription(` You must be connected to a voice channel to use this button`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
      if(interaction.member.voice.selfDeaf) {	
        let thing = new MessageEmbed()
         .setColor(client.embedColor)

       .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
         return await interaction.followUp({embeds: [thing],ephemeral: true});
       }
      const botchannel = interaction.guild.me.voice.channel;
      const player = client.manager.players.get(interaction.guild.id);
      if(!player || !botchannel || !player.queue.current) {
                      const noperms = new MessageEmbed()

           .setColor(client.embedColor)
           .setDescription(` There is nothing playing in this server.`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
      if(player && channel.id !== player.voiceChannel) {
                                  const noperms = new MessageEmbed()
             .setColor(client.embedColor)
          .setDescription(` You must be connected to the same voice channel as me.`)
          return await interaction.followUp({embeds: [noperms],ephemeral: true});
      }
		
     
      player.setVolume(player.volume + 10);
      let thing = new MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Player volume set to ${player.volume}%`)
    return await interaction.channel.send({ embeds: [thing] }).then(responce => {
        setTimeout(() => {
            try {
                responce.delete().catch(() => {
                    return
                })
            } catch(err) {
                return
            }
        }, 5000)
    });
                
     }


        //pause and play
    
        if (interaction.customId === 'prtrack') {

            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                    
                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)
        
            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
                
                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                const noperms = new MessageEmbed()
        
            .setColor(client.embedColor)
               .setDescription(`You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            const song = player.queue.current;

            if (player.paused) {
                player.pause(false);
   
                let thing = new MessageEmbed()
                
                .setDescription(`<@${interaction.member.id}> has resumed the player.`)
                .setColor(client.embedColor)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });
            }
            if (!player.paused) {
            
                player.pause(true);
                let thing = new MessageEmbed()

                .setDescription(` <@!${interaction.member.id}> has paused the player.`)
                .setColor(client.embedColor)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });
            }

        }



        //skip
        if (interaction.customId === 'skiptrack') {
    
            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()

                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)
    
            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
    
                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
                .setColor(client.embedColor)
               .setDescription(` You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }

            const song = player.queue.current;
            const autoplay = player.get("autoplay");
            if (autoplay === false) {
                player.stop();
            } else {
                player.stop();
    
            }       
        
            let thing = new MessageEmbed()

    .setDescription(`Skipping to the next track. -  <@!${interaction.member.id}>`)
                .setColor(client.embedColor)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });
            

        }

            //forward
        if (interaction.customId === 'forward') {

            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                        
                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)

            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
            
                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
                .setColor(client.embedColor)
               .setDescription(` You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            const time = ("10s");
            const etime = require('ms')(time)
            let seektime = Number(player.position) + Number(etime) ;
    if (Number(seektime) >= player.queue.current.duration) seektime = player.queue.current.duration - 1000;
    player.seek(Number(seektime))
     let thing = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`Forwarded to \`${convertTime(player.position)}\``)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });

        }

        if (interaction.customId === 'rewind') {

            await interaction.deferUpdate();
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                        
                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)

            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
            
                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
                .setColor(client.embedColor)
               .setDescription(` You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            const time = ("10s");
            const etime = require('ms')(time)
            let seektime = Number(player.position) - Number(etime) ;
    if (Number(seektime) >= player.queue.current.duration) seektime = player.queue.current.duration - 1000;
    player.seek(Number(seektime))
     let thing = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`Rewinded to \`${convertTime(player.position)}\``)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });

        }

            //previous 
        if (interaction.customId === 'previous') {

            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            if (!interaction.replied) await interaction.deferReply().catch(() => {});
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                      
                 .setColor(client.embedColor)
                   .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms]});
            }
            if(interaction.member.voice.selfDeaf) {	
              let thing = new MessageEmbed()
               .setColor(client.embedColor)
      
             .setDescription(` <@${message.member.id}> You cannot use this button while deafened.`)
               return await interaction.followUp({embeds: [thing]});
             }
      
          let player = client.manager.get(interaction.guildId);
          if(player && channel.id !== player.voiceChannel) {
            const noperms = new MessageEmbed()
                .setColor(client.embedColor)
      .setDescription(` You must be connected to the same voice channel as me.`)
      return await interaction.followUp({embeds: [noperms]});
      }
      
          if (!player) player = client.manager.create({
            guild: interaction.guildId,
            textChannel: interaction.channelId,
            voiceChannel: interaction.member.voice.channelId,
            selfDeafen: true,
          });
      
      
          if (!player.queue.previous) {
              const noperms = new MessageEmbed()
      
              .setColor(client.embedColor)
        .setDescription(`No previous songs found`)
        return await interaction.followUp({embeds: [noperms]}).then(responce => {
            setTimeout(() => {
                try {
                    responce.delete().catch(() => {
                        return
                    })
                } catch(err) {
                    return
                }
            }, 5000)
        });;
        }
      
          const s = await player.search(player.queue.previous.uri, interaction.user);
          if (s.loadType === "LOAD_FAILED") {
            if (player && !player.queue.current) player.destroy();
            return await interaction.followUp({
              content: `Error while Loading track.`
            }).catch(() => {});
          } else if (s.loadType === "NO_MATCHES") {
            if (player && !player.queue.current) player.destroy();
            return await interaction.followUp({
              content: `No results found, try to be specific as possible.`
            }).catch(() => {});
          } else if (s.loadType === "TRACK_LOADED") {
            if (player && player.state !== "CONNECTED") player.connect();
            if (player) player.queue.add(s.tracks[0]);
            if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) player.play();
            return await interaction.followUp({
              embeds: [new MessageEmbed() .setColor(client.embedColor)
                .setDescription(`Queued [${s.tracks[0].title}](https://discord.gg/pXnYt3tYzp) - [${interaction.member.user.tag}] `)]
            }).catch(() => {});
          } else if (s.loadType === "PLAYLIST_LOADED") {
            if (player && player.state !== "CONNECTED") player.connect();
            if (player) player.queue.add(s.tracks);
            if (player && player.state === "CONNECTED" && !player.playing && !player.paused && player.queue.totalSize === s.tracks.length) player.play();
      
            return await interaction.followUp({
              embeds: [new MessageEmbed().setColor(client.embedColor)
              .setDescription(`Queued **${s.tracks.length}** tracks from **${s.playlist.name}** - [${interaction.member.user.tag}]`)]
            }).catch(() => {})
          } else if (s.loadType === "SEARCH_RESULT") {
            if (player && player.state !== "CONNECTED") player.connect();
            if (player) player.queue.add(s.tracks[0]);
            if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) player.play();
            return await interaction.followUp({
              embeds: [new MessageEmbed().setColor(client.embedColor)
                .setDescription(`Queued [${s.tracks[0].title}](https://discord.gg/pXnYt3tYzp) [\`${interaction.member.user.tag}\`]`)]
            }).then(responce => {
                setTimeout(() => {
                    try {
                        responce.delete().catch(() => {
                            return
                        })
                    } catch(err) {
                        return
                    }
                }, 5000)
            });
        }

        }





            //stop
        if (interaction.customId === 'stop') {

            await interaction.deferUpdate();
            const djSchema = require('../../schema/djroleSchema')
            let djdata = await djSchema.findOne({
                guildID: interaction.guild.id,
            })
                if(djdata && !interaction.member.roles.cache.has(djdata.Roleid)) {
         
              const embed = new MessageEmbed()
                   .setColor(client.embedColor)
               .setDescription(`<@${interaction.member.id}> This command requires you to have ${djdata.Roleid}.`)
                   return await interaction.followUp({embeds: [embed],ephemeral: true});
             }
            const { channel } = interaction.member.voice;
            if (!channel) {
                            const noperms = new MessageEmbed()
                        
                .setColor(client.embedColor)
                  .setDescription(` You must be connected to a voice channel to use this button`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(interaction.member.voice.selfDeaf) {	
            let thing = new MessageEmbed()
              .setColor(client.embedColor)

            .setDescription(` <@${interaction.member.id}> You cannot use this button while deafened.`)
            return await interaction.followUp({embeds: [thing], ephemeral: true})
            }
            const botchannel = interaction.guild.me.voice.channel;
            const player = client.manager.players.get(interaction.guild.id);
            if(!player || !botchannel || !player.queue.current) {
                            const noperms = new MessageEmbed()
            
                .setColor(client.embedColor)
                .setDescription(` There is nothing playing in this server.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            if(player && channel.id !== player.voiceChannel) {
                                        const noperms = new MessageEmbed()
                .setColor(client.embedColor)
               .setDescription(` You must be connected to the same voice channel as me.`)
                return await interaction.followUp({embeds: [noperms], ephemeral: true})
            }
            const song = player.queue.current;
            const autoplay = player.get("autoplay")
            if (autoplay === true) {
                player.set("autoplay", false);
            }

            player.stop();
            player.queue.clear();
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
        
                .setDescription(`${ok} Stopped the player and cleared the queue - By <@!${interaction.member.id}>`)
                return await interaction.channel.send({embeds: [thing]}).then(responce => {
                    setTimeout(() => {
                        try {
                            responce.delete().catch(() => {
                                return
                            })
                        } catch(err) {
                            return
                        }
                    }, 5000)
                });

        }
                
                if(interaction.isCommand()) {
                    
                    const SlashCommands = client.sls.get(interaction.commandName);
                    if(!SlashCommands) return;


                        //slash command owneronly
                        if(SlashCommands.owneronly){
                            if(!ownerids.includes(interaction.member.id)){
                                const embed = new MessageEmbed()
                            .setAuthor("No Access", interaction.member.user.displayAvatarURL({ dynamic: true}))
                            .setColor(client.embedColor)
                                 .setDescription(`**Sorry You Can't Use This Command.**`)
                            return interaction.reply({embeds: [embed] ,ephemeral: true});
                            }
                        }
            
                        await SlashCommands.run(client, interaction)
                    }


        
    
            
            
    }


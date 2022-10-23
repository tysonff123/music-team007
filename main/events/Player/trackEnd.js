module.exports = async (client, player, track, playload) => {
    player.get(`playingsongmsg`).delete().catch(e => { }) 
}
module.exports = async (client, player) => {
	let eguild = client.guilds.cache.get(player.guild);
	console.log(`LAVALINK player created.`)
		player.setVolume(100);
		return;
}
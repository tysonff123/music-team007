const mongoose = require('mongoose');

const Dontleavevc = new mongoose.Schema({
    guildID: String,
    voiceChannel: String,
    textChannel: String
})

module.exports = mongoose.model('autojoin', Dontleavevc);

const mongoose = require('mongoose');

const DevSchima = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model(Dev, DevSchima);
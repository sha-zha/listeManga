const mongoose = require('mongoose');

const GenreMangaSchema = mongoose.Schema({
    genreId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Genre',
    },
    mangaId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Manga'
    }
}, { timestamps: true });

module.exports = mongoose.model('GenreManga', GenreMangaSchema);
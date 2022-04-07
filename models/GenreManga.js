const mongoose = require('mongoose');

const GenreMangaSchema = mongoose.Schema({
    GenreId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Genre'
    },
    MangaId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Manga'
    }
}, { timestamps: true });

module.exports = mongoose.model('GenreManga', GenreMangaSchema);
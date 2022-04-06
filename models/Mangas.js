const mongoose = require('mongoose');

const MangaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        required: true
    },
    finish: {
        type: Boolean,
        default: false
    },
    comment : {
      type : String,
      required:false,
        default: null
    },
    created_at : {
        type:Date,
        default: Date.now,
        required:false
    }
});

module.exports = mongoose.model('Manga', MangaSchema);
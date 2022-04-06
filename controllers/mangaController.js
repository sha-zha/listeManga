const MangaModel = require('../models/Mangas');
let controller = {};

controller.index = async (req, res) => {
    const data = await MangaModel.find({});
console.log(data);
    res.render('Mangas/index',{mangas:data});
};

controller.add = async (req, res) => {
    res.render('Mangas/add',{});
}

controller.store = async (req, res) => {
    let name = req.body.name;
    let tag = req.body.tag;
    let comment = req.body.comment;
    let now = new Date();
    let newManga;

    name.trim() === "" || tag.trim() === "" ?
        console.log("to do make flash")
        :
        newManga = await new MangaModel({name: name, tag: tag, finish: false, comment: comment, created_at: now});
        newManga.save();
        res.redirect('/manga');
}
module.exports = controller;
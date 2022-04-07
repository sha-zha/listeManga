const MangaModel = require('../models/Mangas');
let controller = {};

controller.index = async (req, res) => {
    const data = await MangaModel.find({});

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

        res.redirect('/manga')
        :
        newManga = await new MangaModel({name: name, tag: tag, finish: false, comment: comment, created_at: now});
        newManga.save();
        res.redirect('/manga');
};

controller.edit = async (req,res) => {
    const id = req.params.id;
    const edit = await MangaModel.findOne({_id : id});

    res.render('Mangas/edit', {title: 'Edit', manga : edit });
};

controller.update = async (req,res) => {
    let id = req.params.id;
    let name = req.body.name;
    let tag = req.body.tag;
    let comment = req.body.comment;
    let finish = req.body.finish==='on' ? true :false;
    let now = req.body.created_at;

    name.trim() === "" || tag.trim() === "" ?
        console.log("to do make flash")
        :
        await MangaModel.findByIdAndUpdate(
            {_id: id},
            {name: name, tag: tag, finish: finish, comment: comment, created_at: now}
        );

    res.redirect('/manga');
};
module.exports = controller;
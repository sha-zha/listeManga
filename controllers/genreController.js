const GenreModel = require('../models/Genres');
let controller = {};

controller.index = async (req, res) => {
    const data = await GenreModel.find({});

    res.render('Genres/index',{genres:data});
};
controller.add = async (req, res) => {
    res.render('Genres/add', {genre:[]});
};
controller.store = async(req,res)=>{
    let name = req.body.name;
    let genre;
    name === "" ? console.log('error'): genre = await new GenreModel({name: name}); genre.save();

    res.redirect('/genre')
};
controller.edit = async (req, res) => {
    const id = req.params.id;
    const data = await GenreModel.findOne({_id : id});

    res.render('Genres/edit',{genre:data});
};

controller.update =  async (req,res) => {
    let id = req.params.id;
    let name = req.body.name;

    name.trim() === "" ?
        console.log("to do make flash")
        :
        await GenreModel.findByIdAndUpdate(
            {_id: id},
            {name: name}
        );

    res.redirect('/genre');
};

module.exports = controller;
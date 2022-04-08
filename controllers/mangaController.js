const MangaModel = require('../models/Mangas');
const GenreModel = require('../models/Genres');
const GenreMangaModel = require('../models/GenreManga');
let controller = {};

controller.index = async (req, res) => {
    const data = await GenreMangaModel
        .aggregate([
            { $lookup:  {from: 'genres',localField: 'genreId', foreignField: '_id', as: 'genre'} },
            { $lookup:  {from: 'mangas',localField: 'mangaId', foreignField: '_id', as: 'manga'} },
            { $group :
                    {
                        _id: "$mangaId",
                        data: {
                            $push: {
                                mangaId: "$_id.loc",
                                genre: "$genre",
                                manga: "$manga"
                            }
                        }
                    }
            },
        ])
        .exec();

    res.render('Mangas/index',{mangas:data});
};

controller.add = async (req, res) => {
    const data = await GenreModel.find({});

    res.render('Mangas/add',{genres: data});
}

controller.store = async (req, res) => {
    let name = req.body.name;
    let tag = req.body.tag;
    let comment = req.body.comment;
    let newManga;
    let genres = req.body.genreId ;
    let newGenre;

    name.trim() === "" || tag.trim() === "" ?
        res.redirect('/manga')
        :
        //insert mangas
        newManga = await new MangaModel({name: name, tag: tag, finish: false, comment: comment});
        newManga.save();

        //check one or many tags
        if (!Array.isArray(genres)){
            newGenre = await new GenreMangaModel({genreId:genres, mangaId:newManga._id});
            newGenre.save();
        }else{

            if(genres.length <=3){
                genres.map(async (genre)=>{
                    newGenre = await new GenreMangaModel({genreId:genre, mangaId:newManga._id});
                    newGenre.save();
                });
            }
        }

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
    let genres = req.body.genreId;
    let newGenre;

    name.trim() === "" || tag.trim() === "" || genres.length <= 0 ?
        console.log("to do make flash")
        :
        await MangaModel.findByIdAndUpdate(
            {_id: id},
            {name: name, tag: tag, finish: finish, comment: comment}
        );

        await GenreMangaModel.deleteMany({mangaId:id});

        if(!Array.isArray(genres)){
            newGenre = await new GenreMangaModel({genreId:genres, mangaId:id});
            newGenre.save();
        }else{

                if(genres.length <=3){
                    genres.map(async (genre)=>{
                        newGenre = await new GenreMangaModel({genreId:genre, mangaId:id});
                        newGenre.save();
                    });
                }
        }

    res.redirect('/manga');
};
module.exports = controller;
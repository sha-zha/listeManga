const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/mangaController');
const genreController = require("../controllers/genreController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// crud manga
router.get('/manga', mangaController.index);
router.get('/manga/add',mangaController.add);
router.post('/manga/store', mangaController.store);
router.get('/manga/:id',mangaController.edit);
router.post('/manga/:id',mangaController.update);

//crud genre
router.get('/genre', genreController.index);
router.get('/genre/add',genreController.add);
router.post('/genre/store', genreController.store);
router.get('/genre/:id',genreController.edit);
router.post('/genre/:id',genreController.update);
module.exports = router;

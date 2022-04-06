const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/mangaController');
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

module.exports = router;

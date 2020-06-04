var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const skills = [
    {
      "number": 12,
      "text": "Возраст начала занятий на скрипке"
    },
    {
      "number": 76,
      "text": "Концертов отыграл"
    },
    {
      "number": 30,
      "text": "Максимальное число городов в туре"
    },
    {
      "number": 20,
      "text": "Лет на сцене в качестве скрипача"
    }
  ]
  res.render('pages/index', { skills });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
});

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('pages/admin', { title: 'Express' });
});

module.exports = router;

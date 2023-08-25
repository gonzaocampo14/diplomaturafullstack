var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('admin/actualidad', {
    layout: 'admin/layout',
    logueado: req.session.nombre
  });
});

module.exports = router;
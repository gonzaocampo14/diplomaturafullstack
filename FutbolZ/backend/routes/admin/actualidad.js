var express = require('express');
var router = express.Router();
var novedadesModels = require('../../models/actualidadModels');


router.get('/', async function (req, res, next) {
  var novedades = await novedadesModels.getNovedades();
  res.render('admin/actualidad', {
    layout: 'admin/layout',
    logueado: req.session.nombre,
    novedades
  });
});

router.get('/new', (req, res, next) => {
  res.render('admin/new',{
    layout: 'admin/layout'
  })
})

router.post('/new', async (req, res, next) => {
  try {
    
    console.log(req.body)

    if (req.body.titulo != "" && req.body.equipo != "" && req.body.cuerpo != "") {
      await novedadesModels.insertNovedad(req.body);
      res.redirect('/admin/actualidad')
    } else {
      res.render('admin/new', {
        layout: 'admin/layout',
        error: true,
        message: 'Complete todos los campos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'La novedad no se agrego'
    })
  }
})

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;

  await novedadesModels.deleteNovedad(id);
  res.redirect('/admin/actualidad');
  
});

module.exports = router;
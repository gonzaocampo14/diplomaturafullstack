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

router.get('/edit/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModels.getNovedadesById(id);

  res.render('admin/edit', {
    layout: 'admin/layout',
    novedad
  })

});

router.post('/edit', async (req, res, next) => {
  try {

    var obj = {
      titulo: req.body.titulo,
      equipo: req.body.equipo,
      cuerpo: req.body.cuerpo
    }

    
    await novedadesModels.modificarNovedad(obj, req.body.id);
    res.redirect('/admin/actualidad');

  } catch (error) {
    res.render('admin/edit', {
      layout: 'admin/layout',
      error: true,
      message: 'No fue posible modificar'
    })
  }
});

module.exports = router;
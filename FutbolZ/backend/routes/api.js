var express = require('express');
var router = express.Router();
var novedadesModels = require('../models/actualidadModels');
var cloudinary = require('cloudinary').v2;

router.get('/actualidad', async function(req, res, next) {

    let novedades = await novedadesModels.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                heigth: 200,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);

});

module.exports = router;
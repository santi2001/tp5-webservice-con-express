//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const puntoInteresCtrl = require('./../controllers/puntos-interes.controller');

// definiendo rutas
router.get('/', puntoInteresCtrl.getPuntosInteres);
router.post('/', puntoInteresCtrl.createPuntoInteres);
router.get('/:id', puntoInteresCtrl.getPuntoInteres);
router.put('/:id', puntoInteresCtrl.editPuntoInteres);
router.delete('/:id', puntoInteresCtrl.deletePuntoInteres);

//exportacion del modulo de rutas
module.exports = router;
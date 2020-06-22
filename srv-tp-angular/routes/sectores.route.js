console.log("cargo sectores.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const sectorCtrl = require('./../controllers/sector.controller');

// definiendo rutas
router.get('/', sectorCtrl.getSectores);
router.post('/', sectorCtrl.createSector);
router.get('/:id', sectorCtrl.getSector);
router.put('/:id', sectorCtrl.editSector);
router.delete('/:id', sectorCtrl.deleteSector);

//exportacion del modulo de rutas
module.exports = router;
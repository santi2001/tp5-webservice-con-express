const express = require('express');
const router = express.Router();

const pasajeCtrl = require ('../controllers/punto3.controller');
router.get('/',pasajeCtrl.getpasaje);
router.post('/',pasajeCtrl.agregarpasaje);
router.put('/:id',pasajeCtrl.actualizaradelanto);
router.delete('/:id',pasajeCtrl.deletepasaje);
module.exports= router;
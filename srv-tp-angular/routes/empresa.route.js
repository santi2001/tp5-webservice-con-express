const express = require('express');
const router = express.Router();

const mensajeCtrl = require ('../controllers/punto2.controller');
router.get('/',mensajeCtrl.getEmpresa);
router.post('/',mensajeCtrl.agregarEmpresa);
module.exports= router;
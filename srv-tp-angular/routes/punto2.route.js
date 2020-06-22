const express = require('express');
const router = express.Router();

const mensajeCtrl = require ('../controllers/punto2.controller');

router.get('/',mensajeCtrl.getMensajes);
//router.get('/:id',mensajeCtrl.getMensajes);
router.post('/',mensajeCtrl.agregarMensaje);
router.delete('/:id',mensajeCtrl.eliminarMensaje);
//router.post('/',mensajeCtrl.agregarEmpresa);
module.exports= router;
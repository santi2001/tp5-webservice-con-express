const express = require('express');
const router = express.Router();

const AsistenteCtrl = require ('../controllers/punto1.controller');

router.get('/',AsistenteCtrl.getAsistente);
router.post('/',AsistenteCtrl.crearAsistente);
router.delete('/:id',AsistenteCtrl.deleteAsistente);
router.put('/:id',AsistenteCtrl.actualizarAsistente);
module.exports= router;
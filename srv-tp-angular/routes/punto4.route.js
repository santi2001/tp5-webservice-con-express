const express = require('express');
const router = express.Router();

const PalabraCtrl = require ('../controllers/punto4.controller');

router.get('/',PalabraCtrl.getpalabra);
router.post('/',PalabraCtrl.agregarPalabra);
//router.delete('/:id',AsistenteCtrl.deleteAsistente);
module.exports= router;
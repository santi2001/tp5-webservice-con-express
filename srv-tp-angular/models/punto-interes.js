const mongoose = require('mongoose');
const Sector = require('./sector');
const {Schema} = mongoose;

const PuntoInteresSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    latitud: {type: Number, required: true},
    longitud: {type: Number, required: true},
    urlmapa: {type: String, required: true},
    ultimaModificacion: {type: String},
    sector: {type: Schema.Types.ObjectId, ref: Sector}
})

module.exports = mongoose.model('PuntoInteres', PuntoInteresSchema);
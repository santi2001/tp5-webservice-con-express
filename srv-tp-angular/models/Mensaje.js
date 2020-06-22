const mongoose = require('mongoose');
const Empresa= require('./Empresa');
const {Schema} = mongoose;

const mensajeSchema = new Schema(
    {
        para : {type : String , required : true},
        desde : {type : String, required : true},
        texto : {type : String, required : true},
        fecha : {type : Date , required : true},
        empresa : {type: Empresa.schema, required : true}
    }
)
module.exports = mongoose.model('mensaje',mensajeSchema);
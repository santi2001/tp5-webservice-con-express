const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const {Schema} = mongoose;
const pasajeSchema = new Schema(
    {
        dni : {type : Number, required:true},
        categoria: {type : String, required :true},
        precio : {type : Number, required : true },
        fecha : {type : Date , required : true},
        adelantos : { type: [Adelanto.schema] , required :true}
    }
)
module.exports= mongoose.model('pasaje',pasajeSchema);
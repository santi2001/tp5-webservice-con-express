const mongoose = require('mongoose');
const {Schema} = mongoose;

const AsistenteSchema = new Schema(
    {
       usuario : {type : String, required :true},
       nombreDeOrganizacion : {type :String, required : true},
       solicitudConstancia : {type : Boolean , required: true}
    }
)
module.exports= mongoose.model('Asistente',AsistenteSchema);
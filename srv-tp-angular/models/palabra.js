const mongoose = require('mongoose');
const {Schema} = mongoose;
const palabraSchema= new Schema(
    {
        palabra_ingles: {type : String, required :true},
        palabra_espaniol: {type : String, required : true},
        url_imagen : {type : String, required :true}
    }
)
module.exports =mongoose.model('palabra',palabraSchema);
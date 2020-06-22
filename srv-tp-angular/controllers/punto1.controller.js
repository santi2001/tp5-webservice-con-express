const punto1 = require('../models/Asistente');// importamos la clase o esquema  que creamos en la carpeta models 
const punto3Ctrl = require('./punto3.controller');
const puntoInteresCtrl = {}
puntoInteresCtrl.getAsistente= async (req, res) => {
    asistentes = await punto1.find().populate("asistente");//aqui traemos de la bd la tabla solicitada y en el caso que aun no exista... la crea con el formato o esquema que definimos.
    res.json(asistentes);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa
}
puntoInteresCtrl.crearAsistente = async (req, res) => {
    const Asistente = new punto1 (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await Asistente.save();
    res.json({
        'status': 'Asistente saved'
    });
}
puntoInteresCtrl.deleteAsistente = async (req, res)=>{
    await punto1.findByIdAndRemove(req.params.id)
    res.json({
        status: 'PuntoInteres removed'
    })
}
puntoInteresCtrl.actualizarAsistente= async(req,res)=>{

    const Asistente=  new punto1 (req.body);

    await punto1.findByIdAndUpdate(req.params.id, {$set: Asistente}, {new: true});
    res.json({
        'status': 'PuntoInteres updated'
    })
}
module.exports= puntoInteresCtrl;
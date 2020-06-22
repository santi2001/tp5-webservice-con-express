const PuntoInteres = require('../models/punto-interes'); 

const puntoInteresCtrl = {}
puntoInteresCtrl.getPuntosInteres = async (req, res) => {
    puntos = await PuntoInteres.find().populate("sector");
    res.json(puntos);
}

puntoInteresCtrl.createPuntoInteres = async (req, res) => {
    const puntoInteres = new PuntoInteres (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await puntoInteres.save();
    res.json({
        'status': 'PuntoInteres saved'
    });
}

puntoInteresCtrl.editPuntoInteres = async (req, res) => {
    /*const puntoInteres = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vPuntoInteres =  new PuntoInteres (req.body);

    await PuntoInteres.findByIdAndUpdate(req.params.id, {$set: vPuntoInteres}, {new: true});
    res.json({
        'status': 'PuntoInteres updated'
    })
}

puntoInteresCtrl.getPuntoInteres = async (req, res) => {
    const puntoInteres = await PuntoInteres.findById(req.params.id).populate("sector");
    res.json(puntoInteres);
}

puntoInteresCtrl.deletePuntoInteres = async (req, res)=>{
    await PuntoInteres.findByIdAndRemove(req.params.id)
    res.json({
        status: 'PuntoInteres removed'
    })
}
module.exports= puntoInteresCtrl;
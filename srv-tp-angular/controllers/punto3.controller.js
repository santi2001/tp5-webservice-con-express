const punto3 = require('../models/pasaje');// importamos la clase o esquema  que creamos en la carpeta models 
const punto3Ctrl = {}
punto3Ctrl.getpasaje= async (req, res) => {
    pasajes = await punto3.find().populate("pasaje");//aqui traemos de la bd la tabla solicitada y en el caso que aun no exista... la crea con el formato o esquema que definimos.
    res.json(pasajes);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa

}
punto3Ctrl.agregarpasaje = async (req, res) => {
    const pasaje = new punto3 (req.body);
    //const sector = await Sector.findById(req.params.id);
    
    //const puntoInteres.sector = sector;
    await pasaje.save();
    res.json({
        'status': 'pasaje guardado'
    });
}

punto3Ctrl.actualizaradelanto= async(req,res)=>{

    const pasajee=  new punto3 (req.body);

    await punto3.findByIdAndUpdate(req.params.id, {$set: pasajee}, {new: true});
    res.json({
        'status': 'PuntoInteres updated'
    })
}
punto3Ctrl.deletepasaje = async (req, res)=>{
    await punto3.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Punto3 removed'
    })
}
module.exports = punto3Ctrl;
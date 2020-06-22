const punto4 = require('../models/palabra');// importamos la clase o esquema  que creamos en la carpeta models 
const punto4Ctrl = {}
punto4Ctrl.getpalabra= async (req, res) => {
    palabras = await punto4.find().populate("palabra");//aqui traemos de la bd la tabla solicitada y en el caso que aun no exista... la crea con el formato o esquema que definimos.
    res.json(palabras);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa
}
punto4Ctrl.agregarPalabra = async (req, res) => {
    const palabra = new punto4 (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await palabra.save();
    res.json({
        'status': 'palabra guardado'
    });
}
module.exports= punto4Ctrl;
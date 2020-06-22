const punto2 = require('../models/Mensaje');// importamos la clase o esquema  que creamos en la carpeta models 
const empresa = require('../models/Empresa');
const punto2Ctrl = {}
punto2Ctrl.getMensajes= async (req, res) => {
    asistentes = await punto2.find().populate("Empresa");//aqui traemos de la bd la tabla solicitada y en el caso que aun no exista... la crea con el formato o esquema que definimos.
    
    res.json(asistentes);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa
}
// punto2Ctrl.getMensajes= async (req, res) => {
//     const puntoInteres = await punto2.findById(req.params.id).populate("Empresa");
//     res.json(puntoInteres);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa
// }
punto2Ctrl.agregarMensaje = async (req, res) => {
    const Asistente = new punto2 (req.body);
    //const sector = await Sector.findById(req.params.id);
    
    //const puntoInteres.sector = sector;
    await Asistente.save();
    res.json({
        'status': 'mensaje guardado'
    });
}
punto2Ctrl.agregarEmpresa = async (req, res) => {
    const Asistente = new empresa (req.body);
    //const sector = await Sector.findById(req.params.id);
    
    //const puntoInteres.sector = sector;
    await Asistente.save();
    res.json({
        'status': 'mensaje guardado'
    });
}
punto2Ctrl.eliminarMensaje = async (req, res)=>{
    await punto2.findByIdAndRemove(req.params.id)
    res.json({
        status: 'mensaje eliminado'
    })
}
 punto2Ctrl.getEmpresa= async (req, res) => {
   empresas = await empresa.find();//aqui traemos de la bd la tabla solicitada y en el caso que aun no exista... la crea con el formato o esquema que definimos.
    res.json(empresas);// en esta linea convertimos la respuesta en un json que luego sera usa por nuestro programa
 }
 
module.exports= punto2Ctrl;
const Sector = require('../models/sector'); 

const sectorCtrl = {}

sectorCtrl.getSectores = async (req, res) => {
    sectores = await Sector.find();
    res.json(sectores);
}

sectorCtrl.createSector = async (req, res) => {
    console.log("entro create sector");
    const sector = new Sector (req.body);
    await sector.save();
    res.json({
        'status': 'Sector saved'
    });
}

sectorCtrl.getSector = async (req, res) => {
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}

sectorCtrl.editSector = async (req, res) => {
    /*const sector = {
        nombre: req.body.nombre,
        mail: req.body.email,
        dependencia: req.body.dependencia,
    };*/
    const vsector =  new Sector (req.body);
    await Sector.findByIdAndUpdate(req.params.id, {$set: vsector}, {new: true});
    res.json({
        'status': 'Sector updated'
    })
}
sectorCtrl.deleteSector = async (req, res)=>{
    await Sector.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Sector removed'
    })
}
module.exports= sectorCtrl;
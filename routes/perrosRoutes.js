const express= require('express');
const router=express.Router();
const upload=require('../multer/cargarImagen');

const{
    traerPerros,
    traerPerrosSexo,
    agregarUnPerro,
    modificarUnPerro,
    eliminarUnPerro
}=require('../controllers/perrosControllers')


router.get("",traerPerros);
router.get("/:sexo",traerPerrosSexo);
router.post('/agregarPerro',upload.single('imagen'),agregarUnPerro);
router.put('/modificarPerro/:id',modificarUnPerro);
router.delete('/eliminarPerro/:id',eliminarUnPerro);


module.exports=router
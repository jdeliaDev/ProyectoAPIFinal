const express= require('express');
const router=express.Router();
const upload=require('../multer/cargarImagen');

const{
    traerPerros,
    traerPerrosSexo,
    agregarUnPerro,
    eliminarUnPerro
}=require('../controllers/perrosControllers')


router.get("",traerPerros);
router.get("/:sexo",traerPerrosSexo);
router.post('/agregarPerro',upload.single('imagen'),agregarUnPerro);
router.delete('/eliminarPerro',eliminarUnPerro);


module.exports=router
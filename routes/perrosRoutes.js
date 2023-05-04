const express= require('express');
const router=express.Router();

const{
    traerPerros,
    traerPerrosSexo
}=require('../controllers/perrosControllers')


router.get("",traerPerros);
router.get("/:sexo",traerPerrosSexo);


module.exports=router
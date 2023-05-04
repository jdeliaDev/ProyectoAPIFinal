const traerPerrosSexo=async(req,res)=>{
    let dato= req.params.sexo
    let info= await TraerPerrosSexo({sexo:sexo});
    res.send(info);
};

const traerPerros=async(req,res)=>{
    let info= await TraerPerros();
    res.send(info);
}

module.exports={traerPerros,traerPerrosSexo}
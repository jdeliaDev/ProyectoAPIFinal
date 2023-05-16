const dbConnection = require("../config/database");

const traerPerrosSexo=(req,res)=>{
    const dato=req.params.sexo;
    dbConnection.query('SELECT * FROM perros WHERE sexo= ?',[dato],(error,data)=>{
        if(error){
            res.send(error)
        }else{
            res.send(data)
        }
    });
};

const traerPerros=(req,res)=>{
    dbConnection.query('SELECT * FROM perros',(error,data)=>{
        if(error){
            res.send(error)
        }else{
            res.send(data)
        }
    });
};

const agregarUnPerro=(req,res)=>{
    const{nombre,padres,fechaNacimiento,imagen,sexo}=req.body;
    dbConnection.query('INSERT INTO perros (nombre,padres,fechaNacimiento,imagen,sexo)VALUES(?,?,?,?,?)',[nombre,padres,fechaNacimiento,imagen,sexo],(error,data)=>{
        if(error){
            res.send(error)
        }else{
            //res.redirect("/:sexo")
            res.status(200).json("Perro cargado exitosamente");
        }
    })
};

const eliminarUnPerro=(req,res)=>{
    //traer info de que peli eliminar
    const dato=req.params.id;
    //db que la elimine
    dbConnection.query('DELETE  FROM perros WHERE id=?',[dato],(error,mensajeOk)=>{
        if(error){
            res.send(error)
        }else{
            res.send("El perro se elimino correctamente")
        }
    })

};

module.exports={traerPerros,traerPerrosSexo,agregarUnPerro, eliminarUnPerro}
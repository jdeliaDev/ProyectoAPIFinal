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
    const{nombre,padres,fechaNacimiento,sexo}=req.body;
    const imagen='http://localhost:4000/public/'+ req.file.filename;
    dbConnection.query('INSERT INTO perros (nombre,padres,fechaNacimiento,imagen,sexo)VALUES(?,?,?,?,?)',[nombre,padres,fechaNacimiento,imagen,sexo],(error,data)=>{
        if(error){
            res.send(error)
        }else{
            //res.redirect("/:sexo")
            res.status(200).json("Perro cargado exitosamente");
        }
    })
};

const modificarUnPerro=(req,res)=>{
    const id=req.params.id;
    dbConnection.query('UPDATE perros SET ? WHERE id=?',[req.body,id],(error,data)=>{
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
    const id=req.params.id;
    //db que la elimine
    dbConnection.query('DELETE FROM perros WHERE id=?',[id],(error,mensajeOk)=>{
        if(error){
            res.send(error)
        }else{
            res.status(200).json("Perro eliminado exitosamente");            
        }
    })

};

module.exports={traerPerros,traerPerrosSexo,agregarUnPerro, modificarUnPerro, eliminarUnPerro}
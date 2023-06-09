const express= require('express');
const cors =require('cors');
const app=express();
const puerto= 4000;
require('./config/database')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('./imagenes'));

app.use('/perros',require('./routes/perrosRoutes'));

app.listen(puerto,()=>{
    console.log(`Conectado por el puerto ${puerto}`)
});
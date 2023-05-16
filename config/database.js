const mysql=require('mysql2');

const dataBaseInfo={
    host:'localhost',
    user:'root',
    database:'criadero_Rusherking'
};

const dbConnection=mysql.createConnection(dataBaseInfo);

dbConnection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Coneccion con DB MySQL exitosa!!")
    }
});

module.exports=dbConnection;

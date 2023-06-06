require('dotenv').config()
const mysql=require('mysql2');

const dataBaseInfo={
    host:process.env.HOST,
    user:process.env.USER_DB,
    database:process.env.DB,
    password:process.env.PASS,
    dateStrings:true
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

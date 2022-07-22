const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host : "localhost",
        user: "root",
        password: "Aitana",
        database: "angular"
    });

connection.connect(function(error){
    if(error){
        console.log("error en la conexión bd", error);
    }else{
        console.log("Conexión establecida")
    }
});

module.exports = connection;
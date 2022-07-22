const { response } = require("express");
const connection = require("../database");


function postLibros(request, response){
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO libro(id_usuario,titulo,tipo,autor,precio,foto)" + "VALUES ('" + request.body.id_usuario + "','" + request.body.titulo + "','" + request.body.tipo + "','" + request.body.autor + "','" + request.body.precio + "','" + request.body.foto + "')";
    console.log(sql)
    console.log("entramos al back")
    connection.query(sql, function (err, result) {

        if (err){
            console.log(err);
        }else{
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
    }})
}

function getAllLibros(req,res){
    console.log('dentro get libros')
    let clase ="SELECT * FROM libro"
 
    connection.query(clase,function(error,result){
    if(error){
         console.log(error)
    }else{
        res.send(result)
    }
})}


function getLibros(req,res){
    console.log('dentro get libros')
    let clase;
    let id = req.params.id_libro || req.query.id_libro; 
    console.log(id)
    if(id){
        clase ="SELECT * FROM libro WHERE id_libro="+ id;
    }else {
        clase ="SELECT * FROM libro"
    }
    connection.query(clase,function(error,result){
    if(error){
         console.log(error)
    }else{
        res.send(result)
    }
})}

function putLibros(req,res){
    let id_libro = req.body.id_libro;
    let id_usuario = req.body.id_usuario;     
    let titulo   = req.body.titulo;
    let tipo     = req.body.tipo;
    let autor    = req.body.autor;
    let precio   = req.body.precio;
    let foto     = req.body.foto;
    let params = [id_libro, id_usuario, titulo, tipo, autor, precio, foto]   
        clase = "UPDATE libro SET titulo ='" + titulo + "'," + 
                "id_usuario ='" + id_usuario +"',"+
                "tipo ='" + tipo + "',"+
                "autor ='" + autor + "',"+
                "precio ='" + precio + "',"+ 
                "foto='" + foto + "' WHERE id_libro=" + id_libro
                 console.log(clase);
                 connection.query(clase,params,function(error,result) {
                if (error)
                    console.log(error);
                else{
                    console.log(result);
                if (result.insertId)
                    res.send(String(result.insertId));
                else
                    res.send("-1");
}})};

function deleteLibros(req, res) {
    console.log('dentro delete book')
    let respuesta;
    let sql;

    const rev = req.params.id_libro || req.query.id_libro; 
    console.log('delete book', rev)

    if(rev){
        console.log("eliminando libro " + rev);
        sql = "DELETE FROM libro WHERE id_libro=" +  rev   
        connection.query(sql, function (err, result){
            if (err){
                console.log(err);
            }else{
                console.log(result);
                if (result.insertId)
                    res.send(String(result.insertId))
                else
                    res.send(respuesta)
            }
            
        })
      }else{
        res.status(400).send("No se encuentra ese id");
      }
 
}

module.exports = { postLibros,getAllLibros,getLibros,putLibros,deleteLibros}
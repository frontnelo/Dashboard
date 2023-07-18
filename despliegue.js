exports.despliegueTabla = function (tblPeliculas, response){
    
    tblPeliculas.innerHTML = "";
    for(const pelicula of response.data){
        let tr = `<tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.nombre}</td>
                <td>${pelicula.ventas_millones}</td>
        </tr>`
        tblPeliculas.innerHTML += tr;
    

}

}

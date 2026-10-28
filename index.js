function mostrarProductos(){
    let grilla=document.getElementById("grilla-productos");
    grilla.innerHTML="";


    for(let i=0; i<productos.length; i++){
        let producto=productos[i];
        grilla.innerHTML+=`
        <article class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-info">
            <span class="categoria">${producto.categoria}</span>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio">${producto.precio}</span>
                <button onclick="agregarProducto(${producto.id})">Agregar al Carrito</button>
            </div>
        </article>`
        let card=document.createElement("div"); 
    }
}




mostrarProductos();
var carrito =[]
const datos = { "producto": "Edredon", "precio": 20, "cantidad": 1 };

function agregarProducto (producto, precio){

    let indice = carrito.findIndex( c => c.producto === producto )

    if (indice === -1){
        carrito.push(
            {
                "producto": producto,
                "precio": precio,
                cantidad:1
            }
        )
    }else{
        carrito[indice].cantidad++   
    }

     
    console.log(carrito);
    actualizarTabla();

}

function actualizarTabla(){
    let tbody = document.getElementById('tbody')
    let total=0;

    tbody.innerHTML=''

    for( let item of carrito ){
        let fila = tbody.insertRow();

        let celdaProducto = fila.insertCell(0);
        let celdaCantidad = fila.insertCell(1);
        let celdaPrecio = fila.insertCell(2);
        let celdaBoton = fila.insertCell(3);


        celdaProducto.textContent = item.producto;
        celdaCantidad.textContent = item.cantidad;
        celdaPrecio.textContent = item.precio * item.cantidad ;

        //BOTÓN
        let boton = document.createElement("button")
        boton.textContent= "Eliminar"

        celdaBoton.append(boton)

        boton.addEventListener('click', function(){
            
        })
        /////

        total = total + item.precio* item.cantidad;
    }

    document.getElementById('total').innerHTML = total

}


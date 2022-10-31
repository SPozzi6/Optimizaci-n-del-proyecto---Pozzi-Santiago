//TRAIGO HABITACION A RESERVAR DEL LOCAL STORAGE
const habitacionAReservarJSON = localStorage.getItem("habitacion-a-reservar");
const habitacionAReservar = JSON.parse(habitacionAReservarJSON)

if (habitacionAReservar.idHabitacion === 1) {

    const contenedorCard = document.getElementById("contenedor-card");

    const articulo = document.createElement("article");
    articulo.className ="articulo-card";

    const img = document.createElement("img");
    img.setAttribute('src', "../images/habitaciones/habitacion1.jpg");
    img.className = "imagen-articulo";

    const div = document.createElement("div");
    div.className = "contenedor-texto-articulo";

    const parrafo1 = document.createElement("p");
    parrafo1.innerText = "Nombre Habitacion";

    const parrafo2 = document.createElement("p");
    parrafo2.innerText = "Precio por noche: 2000$";

    div.append(parrafo1);
    div.append(parrafo2);

    articulo.append(img);
    articulo.append(div);

    contenedorCard.append(articulo);

    } else if (habitacionAReservar.idHabitacion === 2) {

        const contenedorCard = document.getElementById("contenedor-card");

        const articulo = document.createElement("article");
        articulo.className ="articulo-card";

        const img = document.createElement("img");
        img.setAttribute('src', "../images/habitaciones/habitacion2.jpg");
        img.className = "imagen-articulo";

        const div = document.createElement("div");
        div.className = "contenedor-texto-articulo";

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = "Nombre Habitacion";

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = "Precio por noche: 4000$";

        div.append(parrafo1);
        div.append(parrafo2);

        articulo.append(img);
        articulo.append(div);

        contenedorCard.append(articulo);
    
    } else if (habitacionAReservar.idHabitacion === 3) {

        const contenedorCard = document.getElementById("contenedor-card");

        const articulo = document.createElement("article");
        articulo.className ="articulo-card";

        const img = document.createElement("img");
        img.setAttribute('src', "../images/habitaciones/habitacion3.jpg");
        img.className = "imagen-articulo";

        const div = document.createElement("div");
        div.className = "contenedor-texto-articulo";

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = "Nombre Habitacion";

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = "Precio por noche: 6000$";

        div.append(parrafo1);
        div.append(parrafo2);

        articulo.append(img);
        articulo.append(div);

        contenedorCard.append(articulo);
    
    } else if (habitacionAReservar.idHabitacion === 4) {

        const contenedorCard = document.getElementById("contenedor-card");

        const articulo = document.createElement("article");
        articulo.className ="articulo-card";

        const img = document.createElement("img");
        img.setAttribute('src', "../images/habitaciones/habitacion4.jpg");
        img.className = "imagen-articulo";

        const div = document.createElement("div");
        div.className = "contenedor-texto-articulo";

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = "Nombre Habitacion";

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = "Precio por noche: 8000$";

        div.append(parrafo1);
        div.append(parrafo2);

        articulo.append(img);
        articulo.append(div);

        contenedorCard.append(articulo);
    
    } else if (habitacionAReservar.idHabitacion === 5) {

        const contenedorCard = document.getElementById("contenedor-card");

        const articulo = document.createElement("article");
        articulo.className ="articulo-card";

        const img = document.createElement("img");
        img.setAttribute('src', "../images/habitaciones/habitacion5.jpg");
        img.className = "imagen-articulo";

        const div = document.createElement("div");
        div.className = "contenedor-texto-articulo";

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = "Nombre Habitacion";

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = "Precio por noche: 10000$";

        div.append(parrafo1);
        div.append(parrafo2);

        articulo.append(img);
        articulo.append(div);

        contenedorCard.append(articulo);

    } else if (habitacionAReservar.idHabitacion === 6) {

        const contenedorCard = document.getElementById("contenedor-card");

        const articulo = document.createElement("article");
        articulo.className ="articulo-card";

        const img = document.createElement("img");
        img.setAttribute('src', "../images/habitaciones/habitacion6.jpg");
        img.className = "imagen-articulo";

        const div = document.createElement("div");
        div.className = "contenedor-texto-articulo";

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = "Nombre Habitacion";

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = "Precio por noche: 12000$";

        div.append(parrafo1);
        div.append(parrafo2);

        articulo.append(img);
        articulo.append(div);

        contenedorCard.append(articulo);

    };


//TRAIGO HABITACIONES
const habitacionesJSON = localStorage.getItem("habitaciones")
const habitaciones = JSON.parse(habitacionesJSON)


//TRAIGO HABITACIONES RESERVADAS
const habitacionesReservadasJSON = localStorage.getItem("habitaciones-reservadas")
const habitacionesReservadas = JSON.parse(habitacionesReservadasJSON)


//TRAIGO CHECK-IN / CHECK-OUT / CANTIDAD DE HUESPEDES / ESTADIA TOTAL
const checkIn = localStorage.getItem("check-in");
const checkOut = localStorage.getItem("check-out");

const huespedesJSON = localStorage.getItem("huespedes");
const huespedes = JSON.parse(huespedesJSON);

const estadiaTotalJSON = localStorage.getItem("estadia-total");
const estadiaTotal = JSON.parse(estadiaTotalJSON);


//VARIABLES GLOBALES
const realizarReserva = document.getElementById("datosReserva");

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputDni = document.getElementById("dni");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
const inputPais = document.getElementById("pais");
const inputCiudad = document.getElementById("ciudad");
const inputDireccion = document.getElementById("direccion");
const inputCodigoPostal = document.getElementById("codigo-postal");


//FUNCIONES
//FUNCION QUE COLOCA LA HABITACION COMO OCUPADA
function habitacionOcupada (habitacion) {

    habitaciones.filter((el) => {

        if (el.idHabitacion === habitacionAReservar.idHabitacion) {
        return el.reservado = true;

        };
    
    });

};


function validarDatosCliente(){

    if(inputNombre.value, inputApellido.value, inputDni.value, inputTelefono.value, inputEmail.value, inputPais.value, inputCiudad.value, inputDireccion.value, inputCodigoPostal.value === null || inputNombre.value, inputApellido.value, inputDni.value, inputTelefono.value, inputEmail.value, inputPais.value, inputCiudad.value, inputDireccion.value, inputCodigoPostal.value === "") {
        
        alert("Por favor, ingrese sus datos correctamente")
        
        //LIMPIO INPUTS
        inputNombre.value = "";
        inputApellido.value = "";
        inputDni.value = "";
        inputTelefono.value = "";
        inputEmail.value = "";
        inputPais.value = "";
        inputCiudad.value = "";
        inputDireccion.value = "";
        inputCodigoPostal.value = "";
    
    } else{
    
        window.location.href = "../index.html";
    
    };

};


//EVENTOS
realizarReserva.addEventListener ("submit", (event) => {

    event.preventDefault();

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const dni = inputDni.value;
    const telefono = inputTelefono.value;
    const email = inputEmail.value;
    const pais = inputPais.value;
    const ciudad = inputCiudad.value;
    const direccion = inputDireccion.value;
    const codigoPostal = inputCodigoPostal.value;

    if (nombre, apellido, dni, telefono, email, pais, ciudad, direccion, codigoPostal === null || nombre, apellido, dni, telefono, email, pais, ciudad, direccion, codigoPostal === "") {
    
        alert("Vuelva a intentarlo");

    } else {
    
        //CALCULO PRECIO DE LA ESTADIA
        const precioEstadia = estadiaTotal * habitacionAReservar.precioPorNoche;
        
        //CREO NUEVO CLIENTE AL ENVIAR FORMULARIO DE REGISTRO
        const nuevoCliente = new Cliente (nombre, apellido, dni, telefono, email, pais, ciudad, direccion, codigoPostal);
        listaClientes.push(nuevoCliente);

        //PUSHEO LA RESERVA
        habitacionesReservadas.push(new Reserva (habitacionAReservar, nuevoCliente, checkIn, checkOut, precioEstadia))

        //COLOCO RESERVADO = TRUE EN LA HABITACION A RESERVAR
        habitacionOcupada(habitacionAReservar);

        //CARGO RESERVAS AL LOCAL STORAGE
        localStorage.setItem("reservas", JSON.stringify(habitacionesReservadas));
        localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
        alert("Su reserva ha sido registrada exitosamente, muchas gracias");

        //BORRO DATOS INNECESARIOS
        localStorage.removeItem("habitacionAReservar");
        localStorage.removeItem("check-in");
        localStorage.removeItem("check-out");
        localStorage.removeItem("huespedes");
        localStorage.removeItem("estadia-total");

    };

});

// const contenedorCard = document.getElementById("contenedor-card");

// const articulo = document.createElement("article");
// articulo.className ="articulo";

// const img = document.createElement("img");
// img.setAttribute('src', "../images/habitaciones/habitacion1.jpg");
// img.className = "imagen-articulo";

// const div = document.createElement("div");
// div.className = "contenedor-texto-articulo";

// const parrafo1 = document.createElement("p");
// parrafo1.innerText = "Nombre Habitacion";

// const parrafo2 = document.createElement("p");
// parrafo2.innerText = "2000$";

// div.append(parrafo1);
// div.append(parrafo2);

// articulo.append(img);
// articulo.append(div);

// contenedorCard.append(articulo);

// console.log(articulo);
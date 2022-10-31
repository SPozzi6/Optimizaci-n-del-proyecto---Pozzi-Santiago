//FUNCIONES

// FUNCION QUE RETORNA HABITACION PARA LA CANTIDAD DE INVITADOS
function buscarHabitacionPorInvitados (invitados) {
        
    return listaHabitaciones.find ((el) => {
    return el.capacidad === parseInt(invitados);

    });

};


//OBTENGO HABITACIONES LOCAL STORAGE
function obtenerHabitaciones() {

    let habitaciones = [];

    const habitacionesLS = localStorage.getItem("habitaciones");

    if (habitacionesLS === null) {

        return habitaciones = listaHabitaciones;

    } else {

        return JSON.parse(habitacionesLS);

    }

};


//OBTENGO RESERVAS LOCAL STORAGE
function obtenerReservas() {

    let reservas = [];

    const reservasLS = localStorage.getItem("reservas");

    if (reservasLS === null) {

        return reservas;

    } else {

        return JSON.parse(reservasLS);

    }

};


// REVISO SI LA HABITACION ESTA RESERVADA
function revisarReservado (habitacion) {

    if (habitaciones === null) {

        return true;

    } else {

        return habitaciones.some((el) => {

            return el.idHabitacion === habitacion.idHabitacion && el.reservado === false;        

        });

    };

};


//VALIDO LOS DATOS INGRESADOS
function validarDatos(){

    if((inputCheckIn.value === null || inputCheckIn.value === "") || (inputCheckOut.value === null || inputCheckOut.value === "") || (inputInvitados.value === null || inputInvitados.value === "") || inputCheckIn.value > inputCheckOut.value) {
        
        alert("Ingrese una fecha y cantidad de invitados válida")
        
        //LIMPIO INPUTS
        inputCheckIn.value = "";
        inputCheckOut.value = "";
        inputInvitados.value = "";
    
    } else{
    
        window.location.href = "pages/reserva.html";
    
    };
};

//VARIABLES GLOBALES
const formularioDeReserva = document.getElementById("reserva");

const inputCheckIn = document.getElementById("check-in");
const inputCheckOut = document.getElementById("check-out");
const inputInvitados = document.getElementById("invitados");


//TRAIGO HABITACIONES DEL LOCAL STORAGE
let habitaciones = obtenerHabitaciones();


//TRAIGO RESERVAS
let habitacionesReservadas = obtenerReservas();


//EVENTOS
formularioDeReserva.addEventListener("submit", (event) => {
    
    event.preventDefault();
    
    let checkIn = new Date(inputCheckIn.value);
    let checkOut = new Date(inputCheckOut.value);
    let fechaHoy = new Date ();
    let invitados = inputInvitados.value;
    let estadiaTotal = Math.floor(((checkOut - checkIn) / (1000 * 60 * 60 * 24)));
    
    //BUSCO HABITACION PARA LA CANTIDAD DE INVITADOS
    const habitacionEncontrada = buscarHabitacionPorInvitados(invitados);

    // REVISO SI LA HABITACION ESTA RESERVADA
    const disponible = revisarReservado(habitacionEncontrada)

    if (disponible === true) {

        if (checkIn < fechaHoy || checkOut < fechaHoy || checkIn > checkOut) {

            alert("Vuelva a intentarlo");
            
        } else {

            //CARGO DATOS AL LOCAL STORAGE             
            localStorage.setItem("check-in", checkIn);
            localStorage.setItem("check-out", checkOut);
            localStorage.setItem("huespedes", invitados);
            localStorage.setItem("estadia-total", estadiaTotal);
            localStorage.setItem("habitacion-a-reservar", JSON.stringify(habitacionEncontrada));
            localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
            localStorage.setItem("habitaciones-reservadas", JSON.stringify(habitacionesReservadas))
        
        };
    
    } else {

        alert ("No hay habitaciones disponibles para la cantidad de huespedes ingresados");

    };

});

console.log(habitaciones);
console.log(habitacionesReservadas);

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById(id="hipodogue")
    let inputCapipepo = document.getElementById(id="capipepo")
    let inputRatigueya = document.getElementById(id="ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("¡Selecciona una mascota!")
    }
}

window.addEventListener("load", iniciarJuego)

const botonAgregar = document.getElementById("agregar")
const botonBorrar = document.getElementById("borrar")
const inputAgregar = document.getElementById("inputAgregar")
const inputBorrar = document.getElementById("inputBorrar")

const cajonNombres = document.getElementById("cajonNombres")

const nombres = []

function agregarNombre() {
    (inputAgregar.value != "" && isNaN(inputAgregar.value)) ? nombres.push(inputAgregar.value) : alert("Ingrese algún nombre válido")
    PlasmarArray()
}

botonAgregar.addEventListener("click", agregarNombre)

function borrarNombre() {
    idABorrar = nombres.indexOf(inputBorrar.value);
    (idABorrar != -1) ? nombres.splice(idABorrar, 1) : alert("Ingrese un nombre válido que ya haya sido ingresado a la lista.")
    PlasmarArray()
}

botonBorrar.addEventListener("click", borrarNombre)

function PlasmarArray() {
    if (nombres.length >= 1) {
        cajonNombres.setAttribute("class", "text-black")
        cajonNombres.innerHTML = ""
        for (let i = 0; i < nombres.length-1; i++) {
            cajonNombres.innerHTML += `${nombres[i]}, `
        }
        cajonNombres.innerHTML += `${nombres[nombres.length -1]}.`
    } else {
        cajonNombres.setAttribute("class", "text-white")
        cajonNombres.innerText = "."
    }
}

PlasmarArray()

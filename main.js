const iva = 0.21
const pais = 0.30
const afip = 0.08 

const imptotal = 1.6

function traerData(){
    const input = document.getElementById("precio").value
    const precio = parseFloat(input)
    if (input.length > 0 && !isNaN(input)) {
        let impIva = precio * iva
        let impPais = precio * pais
        let impAfip = precio * afip
        let final = precio+ impIva + impPais + impAfip
        
        const precios = document.getElementById("precios")
        precios.innerHTML = ""

        const precioIva = document.createElement("h3")
        precioIva.textContent = `IVA = ${impIva.toFixed(2)}`
        precios.appendChild(precioIva)
        
        const precioPais = document.createElement("h3")
        precioPais.textContent = `Ley impuesto PAIS = ${impPais.toFixed(2)}`
        precios.appendChild(precioPais)
        
        const precioAfip = document.createElement("h3")
        precioAfip.textContent = `RG AFIP 4815 =  ${impAfip.toFixed(2)}`
        precios.appendChild(precioAfip)
        
        const precioFinal = document.createElement("h3")
        precioFinal.textContent = `Precio final = ${final.toFixed(2)}`
        precios.appendChild(precioFinal)
    }else{       
        const precios = document.getElementById("precios")
        precios.innerHTML = ""
        const mensaje = document.createElement("h3")
        mensaje.textContent = "Escriba un precio"
        precios.appendChild(mensaje)       
    }
}
function precioDolares(){
    const input = document.getElementById("preciodolar").value
    const precio = parseFloat(input)
    const inputjuego = document.getElementById("preciosjuego").value
    const preciojuego = parseFloat(inputjuego)
    
    if (input.length > 0 && !isNaN(input)) {
        let dolarTarjeta = precio * imptotal
        let juego = preciojuego * dolarTarjeta
        
        const precios = document.getElementById("preciosdolares")
        precios.innerHTML = ""
        
        const precioDolar = document.createElement("h3")
        precioDolar.textContent = `Precio del dolar tarjeta actual =  ${dolarTarjeta.toFixed(2)}`
        precios.appendChild(precioDolar)
        
        const precioFinal = document.createElement("h3")
        precioFinal.textContent = `Precio final = ${juego.toFixed(2)}`
        precios.appendChild(precioFinal)
    }else{       
        const precios = document.getElementById("preciosdolares")
        precios.innerHTML = ""
        const mensaje = document.createElement("h3")
        mensaje.textContent = "Escriba un precio"
        precios.appendChild(mensaje)       
    }
}

document.addEventListener('click',(e)=>{
    console.dir(e.target) //esto es para depurar si se esta clickeando bien
    if (e.target.matches("#calcular")) {
        traerData()
    }else if (e.target.matches("#calculardolares")){
        precioDolares()
    }
})
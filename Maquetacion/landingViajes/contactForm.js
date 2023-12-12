
let informacionArray = [];

function guardarInformacion() {
    let nombre = document.getElementById('input-formulario1').value;
    let origen = document.getElementById('input-formulario2').value;
    let destino = document.getElementById('input-formulario3').value;
    let nPersonas = document.getElementById('input-formulario4').value;
    let fechas = document.getElementById('input-formulario5').value;

    if (nombre && origen && destino && nPersonas && fechas) {

        let destinoMinusc = destino.toLowerCase();

        let infoObject = {
            nombre: nombre,
            origen: origen,
            destino: destinoMinusc,
            nPersonas: nPersonas,
            fechas: fechas
        };

        informacionArray.push(infoObject);

        document.getElementById('input-formulario1').value = '';
        document.getElementById('input-formulario2').value = '';
        document.getElementById('input-formulario3').value = '';
        document.getElementById('input-formulario4').value = '';
        document.getElementById('input-formulario5').value = '';
//no hacer caso , es para ver si esta funcionando
        console.log('Información guardada:', infoObject);
    }
}

let botonSolicitarInfo = document.getElementById('boton-formulario');
botonSolicitarInfo.addEventListener('click', guardarInformacion());

function filtrarSolicitudes() {
     let filtrado = "";
     for(let i = 0; i < informacionArray.length; i++){
         if(informacionArray[i].destino == "Canarias" || informacionArray[i].destino == "Mallorca" || informacionArray[i].destino == "Galicia"){
             filtrado += `nombre: ${informacionArray[i].nombre}
                         origen: ${informacionArray[i].origen}
                         destino: ${informacionArray[i].destino}
                         numPersonas: ${nPersonas}
                         fechas: ${informacionArray[i].fechas}`;
         }
         console.log(filtrado);
     }
    let destinosPermitidos = ['canarias', 'mallorca', 'galicia'];
    let solicitudesFiltradas = informacionArray.filter(infoObject => {
        return destinosPermitidos.includes(infoObject.destino);
    });
// pruebo a ver si funciona 
    console.log('Solicitudes con destino en Canarias, Mallorca o Galicia:');
    solicitudesFiltradas.forEach(info => {
        console.log('Nombre:', info.nombre);
        console.log('Origen:', info.origen);
        console.log('Destino:', info.destino);
        console.log('Nº de personas:', info.nPersonas);
        console.log('Fechas:', info.fechas);
        console.log('---');
    });
}

let botonFiltrado = document.getElementById('boton-filtrado');
botonFiltrado.addEventListener('click', filtrarSolicitudes());
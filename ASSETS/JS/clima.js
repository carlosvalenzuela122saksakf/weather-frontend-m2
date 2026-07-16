// 1. Datos del Clima para 10 localidades de Chile (Nuestra base de datos local)
const localidadesClima = [
    {
        id: 1,
        ciudad: "Arica",
        region: "Arica y Parinacota",
        tempActual: "22°C",
        estado: "Despejado ☀️",
        viento: "12 km/h",
        humedad: "65%",
        presion: "1012 hPa",
        semana: [
            { dia: "Lun", temp: "22°C", estado: "☀️" },
            { dia: "Mar", temp: "23°C", estado: "☀️" },
            { dia: "Mié", temp: "22°C", estado: "☁️" },
            { dia: "Jue", temp: "21°C", estado: "☀️" },
            { dia: "Vie", temp: "22°C", estado: "☀️" },
            { dia: "Sáb", temp: "23°C", estado: "☀️" },
            { dia: "Dom", temp: "22°C", estado: "☀️" }
        ]
    },
    {
        id: 2,
        ciudad: "Iquique",
        region: "Tarapacá",
        tempActual: "20°C",
        estado: "Parcialmente nublado ⛅",
        viento: "10 km/h",
        humedad: "70%",
        presion: "1013 hPa",
        semana: [
            { dia: "Lun", temp: "20°C", estado: "⛅" },
            { dia: "Mar", temp: "21°C", estado: "☀️" },
            { dia: "Mié", temp: "20°C", estado: "⛅" },
            { dia: "Jue", temp: "19°C", estado: "☁️" },
            { dia: "Vie", temp: "20°C", estado: "☀️" },
            { dia: "Sáb", temp: "21°C", estado: "☀️" },
            { dia: "Dom", temp: "20°C", estado: "⛅" }
        ]
    },
    {
        id: 3,
        ciudad: "Antofagasta",
        region: "Antofagasta",
        tempActual: "19°C",
        estado: "Nublado ☁️",
        viento: "15 km/h",
        humedad: "75%",
        presion: "1014 hPa",
        semana: [
            { dia: "Lun", temp: "19°C", estado: "☁️" },
            { dia: "Mar", temp: "18°C", estado: "☁️" },
            { dia: "Mié", temp: "20°C", estado: "⛅" },
            { dia: "Jue", temp: "19°C", estado: "☀️" },
            { dia: "Vie", temp: "19°C", estado: "☁️" },
            { dia: "Sáb", temp: "20°C", estado: "⛅" },
            { dia: "Dom", temp: "19°C", estado: "☁️" }
        ]
    },
    {
        id: 4,
        ciudad: "La Serena",
        region: "Coquimbo",
        tempActual: "17°C",
        estado: "Neblina de mañana 🌫️",
        viento: "8 km/h",
        humedad: "80%",
        presion: "1015 hPa",
        semana: [
            { dia: "Lun", temp: "17°C", estado: "🌫️" },
            { dia: "Mar", temp: "18°C", estado: "⛅" },
            { dia: "Mié", temp: "17°C", estado: "☀️" },
            { dia: "Jue", temp: "16°C", estado: "☁️" },
            { dia: "Vie", temp: "17°C", estado: "🌫️" },
            { dia: "Sáb", temp: "19°C", estado: "☀️" },
            { dia: "Dom", temp: "18°C", estado: "⛅" }
        ]
    },
    {
        id: 5,
        ciudad: "Valparaíso",
        region: "Valparaíso",
        tempActual: "15°C",
        estado: "Viento moderado 💨",
        viento: "25 km/h",
        humedad: "72%",
        presion: "1012 hPa",
        semana: [
            { dia: "Lun", temp: "15°C", estado: "💨" },
            { dia: "Mar", temp: "16°C", estado: "⛅" },
            { dia: "Mié", temp: "15°C", estado: "☀️" },
            { dia: "Jue", temp: "14°C", estado: "☁️" },
            { dia: "Vie", temp: "15°C", estado: "💨" },
            { dia: "Sáb", temp: "16°C", estado: "☀️" },
            { dia: "Dom", temp: "15°C", estado: "⛅" }
        ]
    },
    {
        id: 6,
        ciudad: "Santiago",
        region: "Metropolitana",
        tempActual: "18°C",
        estado: "Despejado ☀️",
        viento: "5 km/h",
        humedad: "45%",
        presion: "1016 hPa",
        semana: [
            { dia: "Lun", temp: "18°C", estado: "☀️" },
            { dia: "Mar", temp: "20°C", estado: "☀️" },
            { dia: "Mié", temp: "21°C", estado: "☀️" },
            { dia: "Jue", temp: "19°C", estado: "⛅" },
            { dia: "Vie", temp: "17°C", estado: "☁️" },
            { dia: "Sáb", temp: "19°C", estado: "☀️" },
            { dia: "Dom", temp: "20°C", estado: "☀️" }
        ]
    },
    {
        id: 7,
        ciudad: "Rancagua",
        region: "O'Higgins",
        tempActual: "16°C",
        estado: "Despejado ☀️",
        viento: "7 km/h",
        humedad: "55%",
        presion: "1015 hPa",
        semana: [
            { dia: "Lun", temp: "16°C", estado: "☀️" },
            { dia: "Mar", temp: "18°C", estado: "☀️" },
            { dia: "Mié", temp: "17°C", estado: "⛅" },
            { dia: "Jue", temp: "15°C", estado: "☁️" },
            { dia: "Vie", temp: "16°C", estado: "☀️" },
            { dia: "Sáb", temp: "18°C", estado: "☀️" },
            { dia: "Dom", temp: "17°C", estado: "☀️" }
        ]
    },
    {
        id: 8,
        ciudad: "Talca",
        region: "Maule",
        tempActual: "14°C",
        estado: "Nublado ☁️",
        viento: "9 km/h",
        humedad: "85%",
        presion: "1013 hPa",
        semana: [
            { dia: "Lun", temp: "14°C", estado: "☁️" },
            { dia: "Mar", temp: "15°C", estado: "⛅" },
            { dia: "Mié", temp: "14°C", estado: "🌧️" },
            { dia: "Jue", temp: "13°C", estado: "☁️" },
            { dia: "Vie", temp: "14°C", estado: "☁️" },
            { dia: "Sáb", temp: "16°C", estado: "☀️" },
            { dia: "Dom", temp: "15°C", estado: "⛅" }
        ]
    },
    {
        id: 9,
        ciudad: "Concepción",
        region: "Biobío",
        tempActual: "12°C",
        estado: "Lluvia débil 🌧️",
        viento: "18 km/h",
        humedad: "90%",
        presion: "1011 hPa",
        semana: [
            { dia: "Lun", temp: "12°C", estado: "🌧️" },
            { dia: "Mar", temp: "11°C", estado: "🌧️" },
            { dia: "Mié", temp: "13°C", estado: "☁️" },
            { dia: "Jue", temp: "14°C", estado: "⛅" },
            { dia: "Vie", temp: "12°C", estado: "🌧️" },
            { dia: "Sáb", temp: "13°C", estado: "☁️" },
            { dia: "Dom", temp: "14°C", estado: "⛅" }
        ]
    },
    {
        id: 10,
        ciudad: "Temuco",
        region: "La Araucanía",
        tempActual: "10°C",
        estado: "Chubascos 🌧️",
        viento: "22 km/h",
        humedad: "92%",
        presion: "1010 hPa",
        semana: [
            { dia: "Lun", temp: "10°C", estado: "🌧️" },
            { dia: "Mar", temp: "9°C", estado: "🌧️" },
            { dia: "Mié", temp: "10°C", estado: "🌧️" },
            { dia: "Jue", temp: "11°C", estado: "☁️" },
            { dia: "Vie", temp: "10°C", estado: "🌧️" },
            { dia: "Sáb", temp: "12°C", estado: "⛅" },
            { dia: "Dom", temp: "11°C", estado: "☁️" }
        ]
    }
];

// 2. Elementos del DOM que vamos a manipular
const contenedorCiudades = document.getElementById("contenedor-ciudades");
const vistaHome = document.getElementById("vista-home");
const vistaDetalle = document.getElementById("vista-detalle");
const btnVolver = document.getElementById("btn-volver");
const btnNavHome = document.getElementById("btn-nav-home");

// Elementos de la vista de Detalle
const detalleRegion = document.getElementById("detalle-region");
const detalleCiudad = document.getElementById("detalle-ciudad");
const detalleEstado = document.getElementById("detalle-estado");
const detalleTemp = document.getElementById("detalle-temp");
const detalleViento = document.getElementById("detalle-viento");
const detalleHumedad = document.getElementById("detalle-humedad");
const detallePresion = document.getElementById("detalle-presion");
const contenedorPronostico = document.getElementById("contenedor-pronostico");

// 3. Función para pintar las 10 tarjetas en el Home al iniciar
function cargarCiudadesHome() {
    contenedorCiudades.innerHTML = ""; // Limpiamos por si acaso
    
    localidadesClima.forEach(localidad => {
        // Creamos la columna responsiva de Bootstrap
        const colDiv = document.createElement("div");
        colDiv.className = "col";
        
        // Creamos la tarjeta interactiva
        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm border-0 bg-white" style="cursor: pointer;" onclick="verDetalleLocalidad(${localidad.id})">
                <div class="card-body text-center p-4">
                    <span class="badge bg-light text-secondary mb-2">${localidad.region}</span>
                    <h5 class="card-title fw-bold mb-1">${localidad.ciudad}</h5>
                    <p class="card-text text-muted mb-3">${localidad.estado}</p>
                    <div class="display-6 fw-bold text-primary">${localidad.tempActual}</div>
                </div>
                <div class="card-footer bg-light border-0 text-center py-3">
                    <button class="btn btn-outline-primary btn-sm w-100">Ver pronóstico</button>
                </div>
            </div>
        `;
        
        contenedorCiudades.appendChild(colDiv);
    });
}

// 4. Función para cambiar de pantalla y cargar los datos específicos de la ciudad
function verDetalleLocalidad(id) {
    // Buscamos la localidad seleccionada por su ID
    const ciudadSeleccionada = localidadesClima.find(item => item.id === id);
    
    if (ciudadSeleccionada) {
        // Llenamos la información en la pantalla de detalle
        detalleRegion.innerText = ciudadSeleccionada.region;
        detalleCiudad.innerText = ciudadSeleccionada.ciudad;
        detalleEstado.innerText = ciudadSeleccionada.estado;
        detalleTemp.innerText = ciudadSeleccionada.tempActual;
        detalleViento.innerText = ciudadSeleccionada.viento;
        detalleHumedad.innerText = ciudadSeleccionada.humedad;
        detallePresion.innerText = ciudadSeleccionada.presion;
        
        // Cargamos el pronóstico semanal
        contenedorPronostico.innerHTML = "";
        ciudadSeleccionada.semana.forEach(diaPronostico => {
            const colDia = document.createElement("div");
            colDia.className = "col";
            colDia.innerHTML = `
                <div class="p-3 bg-light rounded text-center border">
                    <span class="d-block text-muted small fw-bold">${diaPronostico.dia}</span>
                    <span class="fs-2 my-1 d-block">${diaPronostico.estado}</span>
                    <strong class="d-block">${diaPronostico.temp}</strong>
                </div>
            `;
            contenedorPronostico.appendChild(colDia);
        });
        
        // Intercambiamos las vistas (ocultamos Home, mostramos Detalle)
        vistaHome.classList.add("d-none");
        vistaDetalle.classList.remove("d-none");
        
        // Hacemos scroll hacia arriba por si el usuario estaba abajo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 5. Eventos de navegación sencillos
function mostrarHome() {
    vistaDetalle.classList.add("d-none");
    vistaHome.classList.remove("d-none");
}

btnVolver.addEventListener("click", mostrarHome);
btnNavHome.addEventListener("click", mostrarHome);

// Inicializar la aplicación al cargar
document.addEventListener("DOMContentLoaded", cargarCiudadesHome);
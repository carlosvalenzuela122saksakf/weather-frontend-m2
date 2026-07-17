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
        estado: "Parcialmente Nublado ⛅",
        viento: "15 km/h",
        humedad: "70%",
        presion: "1013 hPa",
        semana: [
            { dia: "Lun", temp: "20°C", estado: "⛅" },
            { dia: "Mar", temp: "21°C", estado: "☀️" },
            { dia: "Mié", temp: "20°C", estado: "⛅" },
            { dia: "Jue", temp: "19°C", estado: "☁️" },
            { dia: "Vie", temp: "20°C", estado: "⛅" },
            { dia: "Sáb", temp: "21°C", estado: "☀️" },
            { dia: "Dom", temp: "20°C", estado: "☀️" }
        ]
    },
    {
        id: 3,
        ciudad: "Antofagasta",
        region: "Antofagasta",
        tempActual: "18°C",
        estado: "Nublado ☁️",
        viento: "10 km/h",
        humedad: "75%",
        presion: "1014 hPa",
        semana: [
            { dia: "Lun", temp: "18°C", estado: "☁️" },
            { dia: "Mar", temp: "18°C", estado: "☁️" },
            { dia: "Mié", temp: "19°C", estado: "⛅" },
            { dia: "Jue", temp: "17°C", estado: "☁️" },
            { dia: "Vie", temp: "18°C", estado: "⛅" },
            { dia: "Sáb", temp: "19°C", estado: "☀️" },
            { dia: "Dom", temp: "18°C", estado: "☁️" }
        ]
    },
    {
        id: 4,
        ciudad: "Copiapó",
        region: "Atacama",
        tempActual: "25°C",
        estado: "Despejado ☀️",
        viento: "8 km/h",
        humedad: "40%",
        presion: "1011 hPa",
        semana: [
            { dia: "Lun", temp: "25°C", estado: "☀️" },
            { dia: "Mar", temp: "26°C", estado: "☀️" },
            { dia: "Mié", temp: "25°C", estado: "☀️" },
            { dia: "Jue", temp: "24°C", estado: "☀️" },
            { dia: "Vie", temp: "25°C", estado: "☀️" },
            { dia: "Sáb", temp: "26°C", estado: "☀️" },
            { dia: "Dom", temp: "25°C", estado: "☀️" }
        ]
    },
    {
        id: 5,
        ciudad: "La Serena",
        region: "Coquimbo",
        tempActual: "17°C",
        estado: "Niebla 🌫️",
        viento: "14 km/h",
        humedad: "85%",
        presion: "1013 hPa",
        semana: [
            { dia: "Lun", temp: "17°C", estado: "🌫️" },
            { dia: "Mar", temp: "18°C", estado: "⛅" },
            { dia: "Mié", temp: "17°C", estado: "☁️" },
            { dia: "Jue", temp: "16°C", estado: "☁️" },
            { dia: "Vie", temp: "17°C", estado: "⛅" },
            { dia: "Sáb", temp: "18°C", estado: "☀️" },
            { dia: "Dom", temp: "17°C", estado: "⛅" }
        ]
    },
    {
        id: 6,
        ciudad: "Valparaíso",
        region: "Valparaíso",
        tempActual: "16°C",
        estado: "Viento Fuerte 💨",
        viento: "25 km/h",
        humedad: "80%",
        presion: "1012 hPa",
        semana: [
            { dia: "Lun", temp: "16°C", estado: "💨" },
            { dia: "Mar", temp: "17°C", estado: "⛅" },
            { dia: "Mié", temp: "16°C", estado: "☁️" },
            { dia: "Jue", temp: "15°C", estado: "🌧️" },
            { dia: "Vie", temp: "16°C", estado: "⛅" },
            { dia: "Sáb", temp: "17°C", estado: "☀️" },
            { dia: "Dom", temp: "16°C", estado: "💨" }
        ]
    },
    {
        id: 7,
        ciudad: "Santiago",
        region: "Metropolitana",
        tempActual: "19°C",
        estado: "Despejado ☀️",
        viento: "6 km/h",
        humedad: "50%",
        presion: "1015 hPa",
        semana: [
            { dia: "Lun", temp: "19°C", estado: "☀️" },
            { dia: "Mar", temp: "21°C", estado: "☀️" },
            { dia: "Mié", temp: "20°C", estado: "⛅" },
            { dia: "Jue", temp: "18°C", estado: "☁️" },
            { dia: "Vie", temp: "19°C", estado: "☀️" },
            { dia: "Sáb", temp: "22°C", estado: "☀️" },
            { dia: "Dom", temp: "20°C", estado: "☀️" }
        ]
    },
    {
        id: 8,
        ciudad: "Rancagua",
        region: "O'Higgins",
        tempActual: "18°C",
        estado: "Parcialmente Nublado ⛅",
        viento: "9 km/h",
        humedad: "58%",
        presion: "1014 hPa",
        semana: [
            { dia: "Lun", temp: "18°C", estado: "⛅" },
            { dia: "Mar", temp: "20°C", estado: "☀️" },
            { dia: "Mié", temp: "19°C", estado: "⛅" },
            { dia: "Jue", temp: "17°C", estado: "☁️" },
            { dia: "Vie", temp: "18°C", estado: "⛅" },
            { dia: "Sáb", temp: "21°C", estado: "☀️" },
            { dia: "Dom", temp: "19°C", estado: "☀️" }
        ]
    },
    {
        id: 9,
        ciudad: "Talca",
        region: "Maule",
        tempActual: "15°C",
        estado: "Nublado ☁️",
        viento: "11 km/h",
        humedad: "72%",
        presion: "1016 hPa",
        semana: [
            { dia: "Lun", temp: "15°C", estado: "☁️" },
            { dia: "Mar", temp: "16°C", estado: "⛅" },
            { dia: "Mié", temp: "15°C", estado: "☁️" },
            { dia: "Jue", temp: "14°C", estado: "🌧️" },
            { dia: "Vie", temp: "15°C", estado: "⛅" },
            { dia: "Sáb", temp: "17°C", estado: "☀️" },
            { dia: "Dom", temp: "16°C", estado: "⛅" }
        ]
    },
    {
        id: 10,
        ciudad: "Concepción",
        region: "Biobío",
        tempActual: "13°C",
        estado: "Llovizna 🌧️",
        viento: "18 km/h",
        humedad: "88%",
        presion: "1011 hPa",
        semana: [
            { dia: "Lun", temp: "13°C", estado: "🌧️" },
            { dia: "Mar", temp: "14°C", estado: "☁️" },
            { dia: "Mié", temp: "13°C", estado: "🌧️" },
            { dia: "Jue", temp: "12°C", estado: "🌧️" },
            { dia: "Vie", temp: "13°C", estado: "☁️" },
            { dia: "Sáb", temp: "15°C", estado: "⛅" },
            { dia: "Dom", temp: "14°C", estado: "☁️" }
        ]
    }
];

// Variables de Vistas y Contenedores globales
let vistaHome, vistaDetalle, contenedorCiudades, contenedorPronostico;
let detalleRegion, detalleCiudad, detalleEstado, detalleTemp, detalleViento, detalleHumedad, detallePresion;

// 3. Función para pintar las 10 tarjetas en el Home al iniciar
function cargarCiudadesHome() {
    if (!contenedorCiudades) return;
    contenedorCiudades.innerHTML = ""; // Limpiamos el contenedor
    
    localidadesClima.forEach(localidad => {
        // Creamos la columna responsiva de Bootstrap
        const colDiv = document.createElement("div");
        colDiv.className = "col";
        
        // Creamos la estructura de la tarjeta
        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm border-0 bg-white card-clima" style="cursor: pointer;">
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
        
        // Asignamos el evento de forma segura directamente al elemento del DOM
        const tarjeta = colDiv.querySelector(".card-clima");
        tarjeta.addEventListener("click", () => {
            verDetalleLocalidad(localidad.id);
        });
        
        contenedorCiudades.appendChild(colDiv);
    });
}

// 4. Función para cambiar de pantalla y cargar los datos específicos de la ciudad
function verDetalleLocalidad(id) {
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
        
        // Desplazamiento suave al inicio de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 5. Eventos de navegación
function mostrarHome() {
    vistaDetalle.classList.add("d-none");
    vistaHome.classList.remove("d-none");
}

// Inicializar la aplicación de forma completamente segura al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar elementos del DOM una vez cargada la página
    vistaHome = document.getElementById("vista-home");
    vistaDetalle = document.getElementById("vista-detalle");
    contenedorCiudades = document.getElementById("contenedor-ciudades");
    contenedorPronostico = document.getElementById("contenedor-pronostico");

    detalleRegion = document.getElementById("detalle-region");
    detalleCiudad = document.getElementById("detalle-ciudad");
    detalleEstado = document.getElementById("detalle-estado");
    detalleTemp = document.getElementById("detalle-temp");
    detalleViento = document.getElementById("detalle-viento");
    detalleHumedad = document.getElementById("detalle-humedad");
    detallePresion = document.getElementById("detalle-presion");

    // Cargamos las tarjetas del home
    cargarCiudadesHome();

    // Vinculamos los botones de navegación de forma segura
    const btnVolver = document.getElementById("btn-volver");
    const btnNavHome = document.getElementById("btn-nav-home");

    if (btnVolver) {
        btnVolver.addEventListener("click", mostrarHome);
    }
    if (btnNavHome) {
        btnNavHome.addEventListener("click", mostrarHome);
    }
});
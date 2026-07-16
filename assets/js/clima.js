// ... (Tus datos de localidadesClima y variables del DOM se mantienen exactamente igual)

// 3. Función para pintar las 10 tarjetas en el Home al iniciar
function cargarCiudadesHome() {
    contenedorCiudades.innerHTML = ""; // Limpiamos el contenedor
    
    localidadesClima.forEach(localidad => {
        // Creamos la columna responsiva de Bootstrap
        const colDiv = document.createElement("div");
        colDiv.className = "col";
        
        // Creamos la estructura de la tarjeta (sin el onclick en el string)
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

btnVolver.addEventListener("click", mostrarHome);
btnNavHome.addEventListener("click", mostrarHome);

// Inicializar la aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", cargarCiudadesHome);

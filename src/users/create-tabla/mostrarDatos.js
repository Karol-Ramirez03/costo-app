import { info } from "./informacion.js";

const infoAdicional = {
    name: "Adicional",
    about: "Contenido adicional...",
    imagenes: [
        {
            src: "URL_DE_LA_IMAGEN_ADICIONAL1",
            value: "valor1"
        },
        {
            src: "URL_DE_LA_IMAGEN_ADICIONAL2",
            value: "valor2"
        }
    ]
};
async function loadInfo(limite = 1, desde = 0, ) {
    return new Promise((resolve) => {
        const totalItems = info.length 
        const paginas = Math.ceil(totalItems / limite);
        let paginaActiva = Math.ceil((desde + 1) / limite);
        let arreglo = info.slice(desde, desde + limite)
        resolve({ arreglo, paginas, paginaActiva, totalItems, desde });
    });
}

localStorage.clear()
export const cargarInfo = async (element, limite = 1, desde = 0, ) => {
    const { arreglo, paginas, paginaActiva, desde: nuevaDesde } = await loadInfo(limite, desde);
    element.innerHTML = '';
    const paginationControls = document.createElement('div');
    paginationControls.innerHTML = `
        <button id="anterior">Anterior</button>
        <span>${paginaActiva} / ${paginas}</span>
    `;
    element.appendChild(paginationControls);
    console.log(arreglo)
    arreglo.forEach(item => {
        const itemElement = document.createElement('div');
        if (item) {
            itemElement.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.about}</p>
                ${item.imagenes.map(imagen => `
                <div class="card siguiente" style="width: 18rem;">
                    <img src="${imagen.src}" data-value="${imagen.value}" class="card-img-top " alt="${item.name}">
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>`).join('')}
            `;
        }
        element.appendChild(itemElement);
    });


    const btnAnterior = paginationControls.querySelector('#anterior');
    const imagenes = element.querySelectorAll('.siguiente');

    if (paginaActiva > 1) {
        btnAnterior.style.display = 'inline';
    } else {
        btnAnterior.style.display = 'none';
    }

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', (e) => {
            let valor = e.target.getAttribute('data-value');
            localStorage.setItem(e.target.alt, valor);
            const imagenEspecificaSrc = "https://www.example.com/spiderman1.jpg"; // Reemplazar con la URL de la imagen específica que activa la información adicional
            if (e.target.src === imagenEspecificaSrc) {
                info.splice(2,0,infoAdicional)
                cargarInfo(element, limite, 2 * limite); // Comenzar desde el tercer elemento
            } else if (paginaActiva < paginas) {
                cargarInfo(element, limite, nuevaDesde + limite);
            }
        });
    });

    btnAnterior.addEventListener('click', async () => {
        console.log("Pagina activa:", paginaActiva);
        if (paginaActiva > 1) {
            if (paginaActiva === 3 && info.length === 5) {
                console.log("Cargando datos desde info...");
                info.splice(2,1)
                eliminarUltimoDato();
                await cargarInfo(element, limite, nuevaDesde - limite);
            } else {
                console.log("Cargando datos desde datos...");
                eliminarUltimoDato();
                await cargarInfo(element, limite, nuevaDesde - limite);
            }
        }
    });
};

function eliminarUltimoDato() {
    const keys = Object.keys(localStorage);
    if (keys.length > 0) {
        const lastKey = keys[keys.length - 1];
        console.log(lastKey)
        localStorage.removeItem(lastKey);
        console.log(`Eliminado el último dato con clave: ${lastKey}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.card');
    if (contenedor) {
        cargarInfo(contenedor);
    }
});

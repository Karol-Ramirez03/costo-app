import { info } from "./informacion.js";
import { addLogin } from "../login/login.js";
import 'bootstrap/dist/css/bootstrap.min.css'
const infoAdicional = {
    name: "",
    about: "",
    imagenes: [
        {
            src: "",
            value: ""
        },
        {
            src: "",
            value: ""
        },
        {
            src: "",
            value: ""
        },
    ]
};
const data = []
async function loadInfo(limite = 1, desde = 0, ) {
    return new Promise((resolve) => {
        const totalItems = info.length 
        const paginas = Math.ceil(totalItems / limite);
        let paginaActiva = Math.ceil((desde + 1) / limite);
        let arreglo = info.slice(desde, desde + limite)
        resolve({ arreglo, paginas, paginaActiva, totalItems, desde });
    });
}


export const cargarInfo = async (element, limite = 1, desde = 0, ) => {
    const { arreglo, paginas, paginaActiva, desde: nuevaDesde } = await loadInfo(limite, desde);
    element.innerHTML = '';
    const paginationControls = document.createElement('div');
    paginationControls.classList.add('d-flex', 'justify-content-center', 'gap-4');

    paginationControls.innerHTML = `
    
        <p class="ant" id="anterior"> ← Anterior</p>
        <span class="title2">${paginaActiva} / ${paginas}</span>
        <div class="contentprecio"></div>
    `;
    element.appendChild(paginationControls);
    console.log(arreglo)
    // Esto son las cartas
    // Div que contiene las img
    arreglo.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('align-items-around', 'd-flex', 'flex-column','gap-4', 'contenedor-opciones')
        if (item) {
            itemElement.innerHTML = `
                <h2><strong>${item.about}</strong></h2>  
                <div  class="row justify-content-center flex-wrap espacio"  style="width: 99%" >
                    ${item.imagenes.map(imagen => `
                    <div class="card">
                        <img src="${imagen.src}" data-value="${imagen.value}" class="card-img-top siguiente" alt="${item.name}">
                        <div class="card-body">
                        <p class="card-text">${imagen.descripcion}</p>
                        </div>
                    </div>`).join('')}
                </div>
            `;
        }
        element.appendChild(itemElement);
    });

    const btnAnterior = paginationControls.querySelector('#anterior');
    const divcontent = paginationControls.querySelector('.contentprecio');
    const imagenes = element.querySelectorAll('.siguiente');

    const updateDivContent = () => {
        const sumaTotal = sumarValores(data);
        divcontent.textContent = `${sumaTotal} cop`;
        return sumaTotal
    };

    updateDivContent();

    if (paginaActiva > 1) {
        btnAnterior.style.display = 'inline';

    } else {
        btnAnterior.style.display = 'none';

    }
    if (paginaActiva > 2) {
        divcontent.style.display = 'inline';

    } else {
        divcontent.style.display = 'none';
    }

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', (e) => {
            const name = e.target.alt;
            const value = e.target.getAttribute('data-value');
            data.push([name, value]);
            console.log(data)
            localStorage.setItem(name, JSON.stringify(data));
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
            if (paginaActiva === 3 && info.length === 11) {
                console.log("Cargando datos desde info...");
                eliminarUltimoDato();
                info.splice(2,1)
                await cargarInfo(element, limite, nuevaDesde - limite);
            } else {
                console.log("Cargando datos desde datos...");
                eliminarUltimoDato();
                await cargarInfo(element, limite, nuevaDesde - limite);
            }
        }
    });
    if (paginaActiva === paginas) {
        const valorFinal=sumarValores(data)
        addLogin(element,valorFinal,data); // Llama a addLogin cuando se alcanza la última página
    }
};

function eliminarUltimoDato() {
    const keys = Object.keys(localStorage);
    if (keys.length > 0) {
        data.pop()
    }
}

function sumarValores(lista) {
    let sumaTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        let valor = parseFloat(lista[i][1]);
        if (!isNaN(valor)) {
            sumaTotal += valor;
        }
    }
    return sumaTotal;
}


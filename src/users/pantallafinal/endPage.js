// const endBar=document.getElementById('endPage')

export const addEndPage=(element,sumaTotal,opciones)=>{
    //function formatearPrecio(numero) {
    //   return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //  }
    //const valorFinal = formatearPrecio(sumaTotal);
  element.innerHTML =/*html*/`
    <style rel="stylesheet">
        @import "./css/bootstrap/bootstrap.min.css";
        @import "./style.css";
    </style>
    <div id="contenedor-endPage">
        <div id="endPage">
            <div id="volver" ><p>← Volver a empezar</p></div>

            <div class="">
                <p class="endPage-title">¡Bien! ¡Hemos terminado!</p>
                <h2 class="sub-title fs-5">¡Compártenos si te ha gustado!</h2>
            </div>
            <div class="row justify-content-md-center centro-redes" >
                <div class="red-face red col col-2">
                    <img src="src/users/pantallafinal/img/facebook.png" alt="facebook">
                    <p class="">Share</p>
                </div>

                <div class="red-in red col col-2">
                    <img class="in" src="src/users/pantallafinal/img/linkedin.png" alt="linkedin">
                    <p class="">Share</p>
                </div>

                <div class="red-goo red col col-4">
                    <img  src="src/users/pantallafinal/img/google.png" alt="google">
                    <p class="">Google +</p>
                </div>

                <div class="red-twi red col col-3">
                    <img src="src/users/pantallafinal/img/twitter.png" alt="twitter" />
                    <p class="">Tweet</p>
                </div>
            </div>
            <div class="">
                <p class="costo fs-2">El costo estimado de tu app es</p>
                <div class="precio d-flex justify-content-center">
                    <h1>${sumaTotal}</h1>
                    <h1>COP</h1>
                </div>
                <p class="">Editar respuestas</p>
                <p class="fs-6">En CampusLands seleccionamos los mejores <strong> desarrolladores de apps y webs </strong> para tu proyecto. Publica tu proyecto en Yeeply o <br>mira algunos de nuestros casos  de éxito.</p>
            </div>

            <div>
                <button class="crear btn-c btn">Crea tu proyecto</button>
            </div>
        </div>
    </div>
  `
  const alertCharge=document.querySelector('.crear')

  alertCharge.addEventListener('click',()=>{
    alert('Sus datos han sido cargados de manera exitosa')
  })
  const botonVolver=document.getElementById('volver')
  botonVolver.addEventListener('click',()=>{
    location.reload();
  })
}


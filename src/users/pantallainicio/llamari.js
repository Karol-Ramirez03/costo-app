import "../../../style.css";
export class inicio extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./style.css";
            </style>
            <div class="imgPrincipal">
            <img src="src/users/create-tabla/imagenes/main_P/intro.png" alt="">
            </div>
    
            <div class="prin-title">
              <h1 class="title fonts-loaded text-center">
              ¿Cuánto cuesta desarrollar mi
              </h1> 
              <div class="title-color">
                  <h1 class="titleApp">
                  app
                  </h1>
                  <h1>?</h1> 
              </div> 
            </div>
            <p>
              Calcula de forma rápida el coste para crear tu app, contestando estas
              sencillas preguntas.
            </p>
        `;
  }
}

customElements.define("card-init", inicio);

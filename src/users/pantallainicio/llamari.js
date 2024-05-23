import "../../../style.css";
export class inicio extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./style.css";
            </style>
            <div class="img"></div>
    
            <h1 class="title fonts-loaded text-center">
            ¿Cuánto cuesta desarrollar mi <span class='title1'> app</span>?
            </h1>
            <p>
              Calcula de forma rápida el coste para crear tu app, contestando estas
              sencillas preguntas.
            </p>
        `;
  }
}

customElements.define("card-init", inicio);

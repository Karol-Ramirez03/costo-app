import "../../../style.css";
export class inicio extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
            <style rel="stylesheet">
                @import "./style.css";
            </style>
            <div class="img"></div>
    
            <strong><h1 class="title fonts-loaded">
            ¿Cuánto cuesta desarrollar mi <span class='title1'> app</span>?
          </h1></strong>
            <p>
              Calcula de forma rápida el coste para crear tu app, contestando estas
              sencillas preguntas.
            </p>
        `;
  }
}

customElements.define("card-init", inicio);

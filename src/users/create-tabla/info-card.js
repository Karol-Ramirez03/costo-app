export class InfoCard extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
            </style>
            <div class="card siguiente" style="width: 18rem;">
                <slot name='imagen'></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name='nombre'></slot></h5>
                    <p class="card-text"><slot name='descripcion'></slot></p>
                </div>
            </div>
        `;
    }
}

customElements.define('info-card', InfoCard);

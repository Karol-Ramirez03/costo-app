import "./style.css";
import { UsersApp } from "./src/users/users-app.js";
import "./src/users/pantallainicio/llamari.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  
  <div id=contenedor>
  <card-init></card-init>
  <button class="activar">
              <h5><strong>CALCULAR COSTE</strong></h5>
            </button>
  </div>
`;
  const boton = document.querySelector(".activar");
  if (boton) {
    boton.addEventListener("click", () => {
      document.querySelector("#app").innerHTML = `
      <div id="contenedor">
      </div>
    `;

      const element = document.querySelector("#contenedor");
      UsersApp(element);
      const navegacion = document.querySelector(".navegacion");
    });
  }
});

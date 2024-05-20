import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { UsersApp } from './src/users/users-app.js'

const boton = document.querySelector('.activar')

boton.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = `
    
    <div id=contenedor>
      
    </div>
  `
  const element = document.querySelector('#contenedor');
  UsersApp(element)
  const navegacion = document.querySelector('.navegacion')
})

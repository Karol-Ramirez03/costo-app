

const loginBar=document.querySelector('#app')
const activate=document.querySelector('.activar2')

let login=`
<h1 style="color:">hola</h1>
`

activate.addEventListener('click',()=>{
    loginBar.insertAdjacentElement('afterend',login)
})
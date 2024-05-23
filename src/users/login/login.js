// const loginBar=document.getElementById('login')

export const addLogin = (element)=>{
    element.innerHTML = /* html */`
    <style rel="stylesheet">
      @import "./css/bootstrap/bootstrap.min.css";
      @import "./style.css";
    </style>
    <div class="contenedor-login">
      <div id="login">
      <h1 class="titulo">lOGIN</h1>
      <br>
      <br>
      <br>
      <form id="formUsser" class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="nombre" class="form-label">Nombres</label>
          <input type="text" class="form-control" name="nombre" id="nombre" required>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="apellido" class="form-label">Apellidos</label>
          <input type="text" class="form-control" name="apellido" id="apellido" required>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-5">
          <label for="correo" class="form-label">Correo</label>
          <div class="input-group has-validation">
            <input type="text" class="form-control" name="correo" id="correo" aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
              Digita tu correo
            </div>
            <select class="input-group-text form-select" id="inputGroupPrepend"  name="extension" id="extension" required>
              <option selected disabled value="">Elige...</option>
              <option>@gmail.com</option>
              <option>@hotmail.com</option>
              <option>@outlook.com</option>
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <label for="tipo" class="form-label">Tipo de persona</label>
          <select class="form-select" name="tipo" id="tipo" required>
            <option selected disabled value="">Elige...</option>
            <option>Natural</option>
            <option>Juridica</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-4">
          <label for="ciudad" class="form-label">Ciudad</label>
          <input type="text" class="form-control" name="ciudad" id="ciudad" required>
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-12">
          <button id="guardar" class="btn login-btn" type="submit">Login</button>
        </div>
        </div>

      </form>
      </div>
    </div>
    
    
    `
    const saveData=document.querySelector("#guardar")
    saveData.addEventListener('click', async (e)=>{
        e.preventDefault();
        let user={
            nombre:'',
            apellido:'',
            correo:'',
            tipo:'',
            ciudad:''
        }
        const dataUsser=document.querySelector("#formUsser")
        const  datos= Object.fromEntries(new FormData(dataUsser).entries())
        const  usser= JSON.parse(JSON.stringify(datos));
        const {nombre,apellido,correo,extension,tipo,ciudad}=usser
        user.nombre=nombre
        user.apellido=apellido
        user.correo=correo+extension
        user.tipo=tipo
        user.ciudad=ciudad
        console.log(user)

        const response = await fetch('https://66490ac84032b1331bed21bf.mockapi.io/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        const result = await response.json();
        console.log('Datos enviados correctamente:', result);
      
})
}

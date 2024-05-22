/// aqui se importa todo
import { cargarInfo } from "./create-tabla/mostrarDatos"
import { addLogin } from "./login/login"

export const UsersApp = async( element ) => {
    await cargarInfo(element)
}
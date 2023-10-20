import Fusca from "@/core/fundamentos/Fusca"
import TerminalUtil from "../util/TerminalUtil"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import Usuario from "@/core/usuario/model/Usuario"
import InverterSenhaCripto from "@/adapter/authentication/InverterSenhaCripto"
import CasoDeUso from '../../core/shared/CasoDeUso';
import SenhaCripto from "@/adapter/authentication/SenhaCripto"
import RepositorioUsuarioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria"
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg"

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")
    
    const nome = await TerminalUtil.campoRequerido("Nome: ")
    const email = await TerminalUtil.campoRequerido("Email: ")
    const senha = await TerminalUtil.campoRequerido("Senha: ")

    const usuario: Usuario = { nome, email, senha }

    try {
        const repositorio = new RepositorioUsuarioPg()
        const provedorCripto = new SenhaCripto()
        const CasoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

        await CasoDeUso.executar(usuario)

        TerminalUtil.sucesso('Usuario registrado com sucesso')
    } catch (e: any) {
        TerminalUtil.erro(e.message)

    } finally {
        await TerminalUtil.esperarEnter()
    }
}

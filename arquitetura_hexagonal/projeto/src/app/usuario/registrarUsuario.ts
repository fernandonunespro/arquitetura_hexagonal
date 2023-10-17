import Fusca from "@/core/fundamentos/Fusca"
import TerminalUtil from "../util/TerminalUtil"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import Usuario from "@/core/usuario/model/Usuario"
import InverterSenhaCripto from "@/adapter/authentication/InverterSenhaCripto"
import CasoDeUso from '../../core/shared/CasoDeUso';

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")

    const nome = await TerminalUtil.campoRequerido("None: ", "Fernando Nunes")
    const email = await TerminalUtil.campoRequerido("Email: ", "fernandon@gmail.com")
    const senha = await TerminalUtil.campoRequerido("Senha: ", "qwe123")

    const usuario: Usuario = { nome, email, senha }

    const provedorCripto = new InverterSenhaCripto()
    const CasoDeUso = new RegistrarUsuario(provedorCripto)

    await CasoDeUso.executar(usuario)

    TerminalUtil.sucesso('Usuario registrado com sucesso')
    await TerminalUtil.esperarEnter()

    try {
        await CasoDeUso.executar(usuario)
    } catch (e: any) {
        TerminalUtil.erro(e.message)
    } finally {
    await TerminalUtil.esperarEnter()
    }
}

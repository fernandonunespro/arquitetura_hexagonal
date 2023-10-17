import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia"


//Na arquitetura hexagonal esta classe é um ADAPTADOR
//O adaptador NAAO faz parte do core da sua aplicacao
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split('').reverse().join('')
    }
}
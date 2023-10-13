import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";
import Carro from '../../core/fundamentos/Carro';
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";

export default async function dip() {
    TerminalUtil.titulo('DIP')

    const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
        "Fusca", "Ferrari"
    ])

    let carro
    switch (tipo) {
        case 0:
            carro = new Fusca
            break;
        default:
            carro = new Ferrari
            break;
    }

    corrida(carro)
    await TerminalUtil.esperarEnter()
}
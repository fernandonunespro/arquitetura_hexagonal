
//Na arquitetura hexagonal esta interface é uma PORTA
//A porta faz parte do core da sua aplicacao

export default interface ProvedorCriptografia {
    criptografar(texto: string): string
}
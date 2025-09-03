export function validarMensagem(mensagem) {
    if (!mensagem || mensagem.trim().length === 0) {
        return false;
    }

    if (mensagem.trim().length < 10) {
        return false;
    }

    return true;
}

export function validarNome(nome) {
    if (!nome || nome.trim().length === 0) {
        return false;
    }

    if (nome.trim().length < 2) {
        return false;
    }

    return true;
}

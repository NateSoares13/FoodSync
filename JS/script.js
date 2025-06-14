// Função para validar mensagem
function validarMensagem(){
    let mensagem = document.getElementById("mensagem").value;
    if (mensagem.length < 10 || mensagem.length > 500) {
        document.getElementById("erroMensagem").innerHTML = "A mensagem precisa conter entre 10 e 500 caracteres!"
        return false;
    }
    document.getElementById("erroMensagem").innerHTML = ""
    return true;
}
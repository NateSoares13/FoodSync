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

// Função para validar o nome 
function validarNome(){
    let nome = document.getElementById("nomeContato").value;
    if (nome.split(" ")[1] === undefined || nome.split(" ")[1] === ""){
        document.getElementById("erroNome").innerHTML = "Insira nome e sobrenome.";
        return false
    }
    document.getElementById("erroNome").innerHTML = ""
    return true
}
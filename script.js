function criptografarTexto() {
    let texto = document.getElementById("texto-digitado").value;
    let resultado = document.getElementById("texto_resultado");
    let copiar = document.getElementById("btn-copiar");
    let imagem = document.getElementById("img");
    let focoTexto = document.getElementById("texto-digitado");
    let limpar = document.getElementById("btn-limpar");

    if (texto == "") {
        alert("Digite o texto a ser criptografado!");
        focoTexto.focus();
    } else {
        resultado.innerHTML = texto.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

        copiar.style.display = 'block';
        resultado.style.display = 'block';
        imagem.style.display = 'none';
        limpar.style.display = "block";
    }
}

function descriptografarTexto() {
    let texto = document.getElementById("texto-digitado").value;
    let resultado = document.getElementById("texto_resultado");

    if (texto == "") {
        alert("Digite o texto a ser descriptografado!");
        document.getElementById("texto-digitado").focus();
    } else {
        resultado.innerHTML = texto.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    }
}

function copiarTexto() {
    let texto = document.getElementById("texto_resultado").value;
    navigator.clipboard.writeText(texto);
    alert("Copiado para a área de transferência.");
}

function limparConteudo() {
    location.reload();
}


  
const input_texto = document.querySelector("#campoDeTexto");
const resposta = document.querySelector("#campoDeResposta");

function btn_encriptar() {
    const textoE = encriptar(input_texto.value);
    resposta.value = textoE;
    resposta.style.backgroundImage = "none";
}

function encriptar(texto_encriptado) {
    let matriz = [["e", "enter"], 
                  ["i", "imes"], 
                  ["a", "ai"], 
                  ["o", "ober"], 
                  ["u", "ufat"]];
                        
    texto_encriptado = texto_encriptado.toLowerCase();
    
    for(let i = 0; i < matriz.length; i++) {
        if(texto_encriptado.includes(matriz[i][0])) {
            texto_encriptado = 
            texto_encriptado.replaceAll(matriz[i][0], 
                                        matriz[i][1]);
        }
    }
    return texto_encriptado;
}

function btn_desencriptar() {
    const textoD = desencriptar(input_texto.value);
    resposta.value = textoD;
}

function desencriptar(texto_desencriptado) {
    let matriz = [["e", "enter"], 
                  ["i", "imes"], 
                  ["a", "ai"], 
                  ["o", "ober"], 
                  ["u", "ufat"]];
                        
    texto_desencriptado = texto_desencriptado.toLowerCase();
    
    for(let i = 0; i < matriz.length; i++) {
        if(texto_desencriptado.includes(matriz[i][0])) {
            texto_desencriptado = 
            texto_desencriptado.replaceAll(matriz[i][1], 
                                           matriz[i][0]);
        }
    }
    return texto_desencriptado;
}

function btn_copiar() {
    let copiar = document.getElementById("copiar");
    resposta.select();
    document.execCommand("copy");
}

function btn_apagar() {
    input_texto.value = "";
    resposta.value = "";
}
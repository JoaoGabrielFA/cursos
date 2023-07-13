const palavras = [
    palavra001 = {
        nome: "UVA", 
        categoria: "FRUTA"
    }, 
    palavra002 = {
        nome: "MACA", 
        categoria: "FRUTA"
    }, 
    palavra003 = {
        nome: "BANANA", 
        categoria: "FRUTA"
    }, 
    palavra004 = {
        nome: "MELANCIA", 
        categoria: "FRUTA"
    }, 
    palavra005 = {
        nome: "LARANJA", 
        categoria: "FRUTA"
    }, 
    palavra006 = {
        nome: "MORANGO", 
        categoria: "FRUTA"
    }, 
    palavra007 = {
        nome: "ABACAXI", 
        categoria: "FRUTA"
    }, 
    palavra008 = {
        nome: "KIWI", 
        categoria: "FRUTA"
    }, 
    palavra009 = {
        nome: "PERA", 
        categoria: "FRUTA"
    }, 
    palavra010 = {
        nome: "MELAO", 
        categoria: "FRUTA"
    }, 
    palavra011 = {
        nome: "BRASIL", 
        categoria: "PAÍS"
    }, 
    palavra012 = {
        nome: "ARGENTINA", 
        categoria: "PAÍS"
    }, 
    palavra013 = {
        nome: "URUGUAI", 
        categoria: "PAÍS"
    }, 
    palavra014 = {
        nome: "JAPAO", 
        categoria: "PAÍS"
    }, 
    palavra015 = {
        nome: "ESTADOS UNIDOS", 
        categoria: "PAÍS"
    }, 
    palavra016 = {
        nome: "CHINA", 
        categoria: "PAÍS"
    }, 
    palavra017 = {
        nome: "CANADA", 
        categoria: "PAÍS"
    }, 
    palavra018 = {
        nome: "AFRICA DO SUL", 
        categoria: "PAÍS"
    }, 
    palavra019 = {
        nome: "AUSTRALIA", 
        categoria: "PAÍS"
    }, 
    palavra020 = {
        nome: "MEXICO", 
        categoria: "PAÍS"
    }, 
    palavra021 = {
        nome: "CACHORRO", 
        categoria: "ANIMAL"
    }, 
    palavra022 = {
        nome: "GATO", 
        categoria: "ANIMAL"
    }, 
    palavra023 = {
        nome: "ORNITORRINCO", 
        categoria: "ANIMAL"
    }, 
    palavra024 = {
        nome: "MACACO", 
        categoria: "ANIMAL"
    }, 
    palavra025 = {
        nome: "COBRA", 
        categoria: "ANIMAL"
    }, 
    palavra026 = {
        nome: "PORCO", 
        categoria: "ANIMAL"
    }, 
    palavra027 = {
        nome: "VACA", 
        categoria: "ANIMAL"
    }, 
    palavra028 = {
        nome: "PATO", 
        categoria: "ANIMAL"
    }, 
    palavra029 = {
        nome: "JACARE", 
        categoria: "ANIMAL"
    }, 
    palavra030 = {
        nome: "URSO", 
        categoria: "ANIMAL"
    }, 
    palavra031 = {
        nome: "SAMSUNG", 
        categoria: "MARCA"
    }, 
    palavra032 = {
        nome: "SONY", 
        categoria: "MARCA"
    }, 
    palavra033 = {
        nome: "COCA COLA", 
        categoria: "MARCA"
    }, 
    palavra034 = {
        nome: "BRASTEMP", 
        categoria: "MARCA"
    }, 
    palavra035 = {
        nome: "NESTLE", 
        categoria: "MARCA"
    }, 
    palavra036 = {
        nome: "NIKE", 
        categoria: "MARCA"
    }, 
    palavra037 = {
        nome: "ADIDAS", 
        categoria: "MARCA"
    }, 
    palavra038 = {
        nome: "FERRARI", 
        categoria: "MARCA"
    }, 
    palavra039 = {
        nome: "FORD", 
        categoria: "MARCA"
    }, 
    palavra040 = {
        nome: "LACTA", 
        categoria: "MARCA"
    }, 
    palavra041 = {
        nome: "FORMIGA", 
        categoria: "INSETO"
    }, 
    palavra042 = {
        nome: "BARATA", 
        categoria: "INSETO"
    }, 
    palavra043 = {
        nome: "MOSCA", 
        categoria: "INSETO"
    }, 
    palavra044 = {
        nome: "BESOURO", 
        categoria: "INSETO"
    }, 
    palavra045 = {
        nome: "JOANINHA", 
        categoria: "INSETO"
    }, 
    palavra046 = {
        nome: "MOSQUITO", 
        categoria: "INSETO"
    }, 
    palavra047 = {
        nome: "ABELHA", 
        categoria: "INSETO"
    }, 
    palavra048 = {
        nome: "VESPA", 
        categoria: "INSETO"
    }, 
    palavra049 = {
        nome: "BORBOLETA", 
        categoria: "INSETO"
    }, 
    palavra050 = {
        nome: "GRILO", 
        categoria: "INSETO"
    }
];
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
let lista_dinamica = [];

let palavra_sorteada;
let categoria_da_palavra_sorteada;

let chances = 6;

function sorteiaPalavra(){
    var aleatorio = Math.floor(Math.random()*palavras.length - 1);
    palavra_sorteada = palavras[aleatorio].nome;
    categoria_da_palavra_sorteada = palavras[aleatorio].categoria;
}

function iniciar(){
    const categoria_tela = document.getElementById("categoria");
    categoria_tela.innerHTML = categoria_da_palavra_sorteada;
    
    const palavra_tela = document.getElementById("palavra_secreta");
    palavra_tela.innerHTML = " ";
    
    for(i = 0; i < palavra_sorteada.length; i++){
        if(lista_dinamica[i] == undefined){
            if(palavra_sorteada[i] == " "){
               lista_dinamica[i] = " ";
               palavra_tela.innerHTML = palavra_tela.innerHTML + "<div class='letrasEspaco'>" + lista_dinamica[i] + "</div>";
            }
            else{
                lista_dinamica[i] = "&nbsp;";
                palavra_tela.innerHTML = palavra_tela.innerHTML + "<div class='letras'>" + lista_dinamica[i] + "</div>";
            }
        }
        else{
            if(palavra_sorteada[i] == " "){
               lista_dinamica[i] = " ";
               palavra_tela.innerHTML = palavra_tela.innerHTML + "<div class='letrasEspaco'>" + lista_dinamica[i] + "</div>";
            }
            else{
                palavra_tela.innerHTML = palavra_tela.innerHTML + "<div class='letras'>" + lista_dinamica[i] + "</div>";
            }
        }
    }
}

function checarLetra(letra){
    document.getElementById("tecla_" + letra).disabled = true;
    
    if(chances > 0){
        mudaCorTecla("tecla_" + letra, false);
        checarLetraNaPalavra(letra);
        iniciar();
    }
}

function mudaCorTecla(tecla, acertou){
    if(acertou == false){
        document.getElementById(tecla).classList.add("errada");
    }
    else{
        document.getElementById(tecla).classList.add("certa");
    }
}

function checarLetraNaPalavra(letra){
    const posicao = palavra_sorteada.indexOf(letra);
    
    if(posicao < 0){
        chances--;
        atualizaImagem();
        if(chances == 0){
            abreModal("Acabaram as suas chances...", "a palavra era " + palavra_sorteada);
        }
    }
    else{
        mudaCorTecla("tecla_" + letra, true);
            
        for(i = 0; i < palavra_sorteada.length; i++){
            if(palavra_sorteada[i] == letra){
                lista_dinamica[i] = letra;
            }
        }
    }
        
    let vitoria = true;
        
    for(i = 0; i < palavra_sorteada.length; i++){
        if(palavra_sorteada[i] != lista_dinamica[i]){
            vitoria = false;
        }
    }
        
    if(vitoria == true){
        abreModal("PARABÉNS", "você acertou a palavra")
        chances = 0;
    }
}

function atualizaImagem(){
    let imagem = document.querySelector("#imagem");
    switch (chances) {
        case 5:
            imagem.setAttribute("src", "imagens/forca_1.png");
            break;
        case 4:
            imagem.setAttribute("src", "imagens/forca_2.png");
            break;
        case 3:
            imagem.setAttribute("src", "imagens/forca_3.png");
            break;
        case 2:
            imagem.setAttribute("src", "imagens/forca_4.png");
            break;
        case 1:
            imagem.setAttribute("src", "imagens/forca_5.png");
            break;
        case 0:
            imagem.setAttribute("src", "imagens/forca_6.png");
            break;
        default:
            imagem.setAttribute("src", "imagens/forca_0.png");
    }
}

function abreModal(titulo, mensagem){
    let titulo_modal = document.getElementById("exampleModalLabel");
    titulo_modal.innerText = titulo;
    
    let mensagem_modal = document.getElementById("modal-text");
    mensagem_modal.innerHTML = mensagem;
    
    $("#myModal").modal({
        show: true
    });
}

function resetaCor(){
    for(i = 0; i < alfabeto.length; i++){
        let tecla = "tecla_" + alfabeto[i];
        document.getElementById(tecla).classList.remove("errada");
        document.getElementById(tecla).classList.remove("certa");
        document.getElementById(tecla).disabled = false;
    }
}

function reiniciarJogo(){
    $("#myModal").modal("hide");
    
    sorteiaPalavra();
    chances = 6;
    atualizaImagem();
    resetaCor();
    lista_dinamica = [];
    iniciar();
}

document.addEventListener("keydown", tecla =>{
    let letra = tecla.key.toUpperCase();

    if(alfabeto.includes(letra)){
        checarLetra(letra);
    }

    if(tecla.key == "Enter"){
        reiniciarJogo();
    }
}) 

sorteiaPalavra();
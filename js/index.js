var timeClock = 30;
var attempt = 0;
var points = 0;
let RamdomWordString;
var helper = 1;
var helCont = 3
var resetHelp = 0;
const arrHelp = [];
var life = 5;

time();
generation();

function generation(){
  
  const elemento = document.getElementById("word");
  elemento.classList.remove("green");
  
  dificuldadeConfig();

  helpConfig();
  lifeConfig();

}


// Função de Embaralhar as letras
function shuffleArray(array){
  var a = array.split(``);
  var n = a.length;

    for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    
    if(n>=13){
      const elemento = document.getElementById("word");
      if (elemento.classList) elemento.classList.add("font-small");
    }

    
    var palabra = a.join(``);
    exibirWord(palabra);

    return palabra;
    
  }
  
  function exibirWord(wordExibir){
    if(wordExibir == RamdomWordString){
      shuffleArray(RamdomWordString);
    }else{
      document.getElementById("word").innerHTML = wordExibir; 
    }
}

function check(){
  
  const verfic = document.querySelector('.input-text');
  const verficValue = verfic.value.toUpperCase();


  if(verficValue == ''){
    document.getElementById('input-text').value='Digite algo';
    setTimeout(function() {
      document.getElementById('input-text').value='';
    }, 1000);
  }else if(verficValue == RamdomWordString){
    
    const elemento = document.getElementById("word");
    if (elemento.classList) elemento.classList.add("green");
    
    const audio = document.querySelector('audio');
    audio.play();

    document.getElementById("word").innerHTML = RamdomWordString; 
    
    points++;
    document.getElementById("points").innerHTML = points; 
    
    document.getElementById('input-text').value='';

    setTimeout(function() {
        helper = 1;
        timeClock = timeClock + 5;
        arrHelp.splice(0);
        document.getElementById("helper").innerHTML = ' - '; 
        generation();
    }, 500);

  }else{
    const elemento = document.getElementById("word");
    if (elemento.classList) elemento.classList.add("red");

    const errou = document.getElementById("errou");
    if (errou.classList) errou.classList.add("errou");

    document.getElementById('input-text').value='';

    attempt++;
    life--;
    document.getElementById("heart").innerHTML = life; 

    if(life==0){
      refresh();
    }

    setTimeout(function() {
      const elemento = document.getElementById("word");
      if (elemento.classList) elemento.classList.remove("red");

      const errou = document.getElementById("errou");
      if (errou.classList) errou.classList.remove("errou");


    }, 500);
  }

}

function refresh(){
  document.location.reload();
}


function help(){
        var numberLength = RamdomWordString.split(``);
        var numLen = numberLength.length;
        
        var lengthOther = Math.floor(Math.random() * (numberLength.length));
        if(helper==1){
            helCont--;
            helper++;
            var helpNum = numLen;
            
            for(var t = 0; t < helpNum; t++) {
        
                arrHelp.push(' _ ');
                
                }
                arrHelp[lengthOther] = ' ' + numberLength[lengthOther] + ' ';    
        }else{
            if(arrHelp[lengthOther] != ' _ '){
                geratatinHelper()
            }else{
                helCont--;
                arrHelp[lengthOther] = ' ' + numberLength[lengthOther] + ' ';
                helper++;
            }
        }
            
        document.getElementById("helper").innerHTML = arrHelp; 
        document.getElementById('helpCont').innerHTML = ' ' + helCont + ' ';

    if(helCont == 0){
        const elemento = document.getElementById("helper_Button");
        if (elemento.classList) elemento.classList.add("display-None");
    }
}

function geratatinHelper(){
    help();
}

document.addEventListener("keypress", function(e){
  if(e.key == "Enter"){
    document.getElementById("submit-btn").click();
  }
});

function helpConfig(){
  if(helCont == 0){
    document.getElementById("helper").innerHTML = ' Você está sem dicas! '; 
    resetHelp++;
  }else{ 
    document.getElementById('helpCont').innerHTML = ' ' + helCont + ' ';
  }

  if(resetHelp == 3){
    helCont = 3;
    const elemento = document.getElementById("helper_Button");
    if (elemento.classList) elemento.classList.remove("display-None");
    document.getElementById('helpCont').innerHTML = ' ' + helCont + ' ';
    document.getElementById("helper").innerHTML = ' - '; 
    resetHelp = 0;
  }
}

function lifeConfig(){
  if([10, 20, 30, 40, 50].includes(points)){
    timeClock = timeClock + 10;
    life = life + 3;
    document.getElementById("heart").innerHTML = life; 
  }
}

function dificuldadeConfig() {
  if(points<5){   
    easyWord();
  }else if(points <=15){
    mediuWord();
  }else if(points>=16){
    hardWord();
  }
}

function easyWord(){

  const elemento = document.getElementById("dificuldade");
  if (elemento.classList) elemento.classList.add("facil"); 
  document.getElementById("dificuldade").innerHTML = ' FÁCIL '; 

  let words=['ANEL','CÁRIE','LAÇO','BONDE','DIAS','POMAR','MANGA','FITA','PORCA','ACNE','PORTO','TREM','VERSO','USAVA','CARRO','PAIS','CERA','FOTO','POUCO','FORA','CINZA','CAMPO','RAIZ','BOTAS','IMAGEM','SESTA','PARTE','BARBA','MULA','ATEU','LUZES','GATO','BOI','VARA','ACIMA','OSTRA','VEIA','SUCO','VIVO','PONTO','FIXAR','FALSO','JUNTOS','SAUNA','SONO','FAZER','PRETO','RISO','NOIVO','VINHO',]; 
   // Gerando a palavra aleatoria
  let wordobtain = Math.floor(Math.random() * words.length);
  // Adicionando palavra a uma variavel
  RamdomWordString = words[wordobtain];

  // Chamando a função de embaralhar as letras
  shuffleArray(RamdomWordString);
  return RamdomWordString;
}

function mediuWord(){
  const elemento = document.getElementById("dificuldade");
  if (elemento.classList) elemento.classList.remove("facil");
  if (elemento.classList) elemento.classList.add("medium"); 
  document.getElementById("dificuldade").innerHTML = ' MÉDIO '; 

  let words=['MODELO','DARDOS','UMBIGO','CHIFRE','INSETO','CASSINO','DEBATE','QUADRO','QUERER','CAMELO','VIBRAR','UMBIGO','BANANA','JOELHO','BATUTA','CUPIDO','PERUCA','RIMMEL','ACALMAR','DETONAR','COAXAR','SEREIA','DEBATE','MENINA','PALAVRA','LIMPEZA','BIGODES','CHAVES','PACOTES','ROSADO','TESOURA','FUTURO','GRAVES','BILHETE','MORCEGO','BOLSAS','MANCHAR','PALETA',]; 
   // Gerando a palavra aleatoria
  let wordobtain = Math.floor(Math.random() * words.length);
  // Adicionando palavra a uma variavel
  RamdomWordString = words[wordobtain];

  // Chamando a função de embaralhar as letras
  shuffleArray(RamdomWordString);
  return RamdomWordString;
}

function hardWord(){
  const elemento = document.getElementById("dificuldade");
  if (elemento.classList) elemento.classList.remove("medium");
  if (elemento.classList) elemento.classList.add("dificil"); 
  document.getElementById("dificuldade").innerHTML = ' DIFÍCIL ';

  let words=['HIPNOTIZAR','SUBMARINO','ECOLOGISTA','DIAGONAL','AFRICANO','BISCOITO','BILHETE','HEMISPHERES','PINTURAS','CARAVELAS','BANDAGEM','ORIGINAL','PRECIOSO','INFORMADOR','CADEIRA','CASAMENTO','ESCORNAR','COLETAR','CERCADO','OFERTA','MAIONESE','ARRIMAR','CIRURGIA','CONECTAR','DIÂMETRO','LAVANDERIA','GARRAFA','CELEBRIDADE','MINISSAIA','ENCERRAMENTO','MOLUSCO','CAMPONÊS','GOLFINHO','LINCHAR','MAGNITUDE','BISCOITO','RETROVISOR','PALAVRAS','DESCONGELAR','ASSALTO','CONSTRUIR','PONTUAL','SALSICHA','GUILHOTINA','ESCAVADEIRA','PERCEVEJO','CASSETE','NICOTINA','PATCHING','APOSTADOR','ONDULAÇÃO','INTERNAR','EMBALAGEM','RESSALTO','REMETENTE','CORCUNDA','APERITIVO','ESMERALDA','CONTINUAR','MEDICINA','SINTONIZE','BEISEBOL','DINAMITE',]; 
   // Gerando a palavra aleatoria
  let wordobtain = Math.floor(Math.random() * words.length);
  // Adicionando palavra a uma variavel
  RamdomWordString = words[wordobtain];

  // Chamando a função de embaralhar as letras
  shuffleArray(RamdomWordString);
  return RamdomWordString;
}

function time(){
  timeClock --;
  document.getElementById("time").innerHTML = timeClock; 

  setTimeout(function() {
    if(!timeClock == 0){
      time();
    }else{
      document.getElementById("word").innerHTML = "TEMPO!";    

      const finish = document.getElementById("word");
      finish.classList.add("red");

      const elemento = document.getElementById("errou");
      elemento.classList.add("errou");
      
      setTimeout(function() {
        const finish = document.getElementById("word");
      finish.classList.remove("red");

        const errou = document.getElementById("errou");
        if (errou.classList) errou.classList.remove("errou");

        refresh();
      }, 2000);
    }
}, 1000);

  
}
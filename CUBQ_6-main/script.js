
// script.js

//LOADER
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); 
});
function removeLoader(){
   $( "#loadingDiv" ).fadeOut(500, function() {
   $( "#loadingDiv" ).remove(); 
  });  
}

$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
  
  $("#menu").click(function(e){
    $(this).toggleClass("active")
    $("#header").toggleClass("active")
  })
});

//AUDIO
// Parte 1: Tocar/pausar o áudio ao clicar no elemento com a classe 'Sound'
document.getElementsByClassName('Sound')[0].onclick = function() {
  this.classList.toggle('on');
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

// Parte 2: Configurar o áudio para tocar automaticamente e carregar o áudio quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  audio.autoplay = true;
  audio.load();
});

// Parte 3: Definir as funções playAudio() e pauseAudio() para tocar e pausar o áudio e ajustar a exibição dos botões
function playAudio() {
  var x = document.getElementById("myAudio");
  x.play();
  var unMuteButton = document.getElementById('un-mute1');
  var muteButton = document.getElementById('mute1');
  unMuteButton.style.display = 'none';
  muteButton.style.display = 'inline-block';
}

function pauseAudio() {
  var x = document.getElementById("myAudio");
  x.pause();
  var unMuteButton = document.getElementById('un-mute1');
  var muteButton = document.getElementById('mute1');
  muteButton.style.display = 'none';
  unMuteButton.style.display = 'inline-block';
}

// Parte 4: Adicionar os ouvintes de eventos para os botões mute e un-mute
document.addEventListener("DOMContentLoaded", function() {
  var unMuteButton = document.getElementById('un-mute1');
  var muteButton = document.getElementById('mute1');

  if (muteButton && unMuteButton) {
    // Ocultar o botão mute por padrão
    unMuteButton.style.display = 'none';

    if (muteButton.addEventListener) {
      muteButton.addEventListener('click', playAudio);
    }

    if (unMuteButton.addEventListener) {
      unMuteButton.addEventListener('click', pauseAudio);
    }
  }
});

//TRANSICAO PAGINA 2

 // Função de easing para tornar a transição mais suave
 function easeOutQuart(t) {
  return 1 - (--t) * t * t * t;
}

window.addEventListener('scroll', function() {
  const div_2 = document.querySelector('div_2'); // Corrigir o seletor aqui
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const div_2Offset = div_2.offsetTop;
  const div_2Height = div_2.offsetHeight;
  const offset = 30 * window.innerWidth / 100; // 30vw em pixels

  // Calcula a porcentagem da opacidade com base na posição da div_2 em relação à altura da janela, considerando o deslocamento para baixo
  const opacity = (scrollPosition - div_2Offset + windowHeight - offset) / div_2Height;

  // Ajusta a curva de transição usando a função de easing
  const easedOpacity = easeOutQuart(opacity);

  // Define a opacidade da div_2
  div_2.style.opacity = easedOpacity > 1 ? 1 : (easedOpacity > 0 ? easedOpacity : 0); // Garante que a opacidade não seja menor que 0 e maior que 1
});
  
function CambiaMensaje() {
  var loadingMessage = document.getElementById("loading-message");
  if (loadingMessage.innerText === "Cargando...") {
    loadingMessage.innerText = "¡Enviado!";
    
    // Notificación
    var notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = "Recibiste un abrazo...";
    document.body.appendChild(notification);
  
    // Eliminar la notificación después de 3 segundos
    setTimeout(function() {
      document.body.removeChild(notification);
    }, 3000);
  }
}

var musicPlaying = true;
var audio = document.getElementById('myAudio');

var musicToggleBtn = document.getElementById('music-toggle-btn');
var iconElement = document.querySelector("#music-toggle-btn img");

musicToggleBtn.addEventListener('click', function() {
  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    iconElement.src = 'volumen off.svg';
    iconElement.classList.remove('icon-on');
  } else {
    audio.play();
    musicPlaying = true;
    iconElement.src = 'volumen up.svg';
    iconElement.classList.add('icon-on');
  }
});

window.addEventListener('load', function() {
  audio.play();
});

var loveLetterModal = document.getElementById("love-letter-modal");
var loveLetterBtn = document.getElementById("love-letter-btn");
var closeBtn = document.querySelector(".close");

loveLetterBtn.addEventListener("click", function() {
  loveLetterModal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  loveLetterModal.style.display = "none";
});

// Obtener referencias a los elementos relevantes
const transitionBtn = document.querySelector('#transition-btn');
const firstContent = document.querySelector('#first-content');
const secondContent = document.querySelector('#second-content');

// Agregar un controlador de eventos para el clic en el botón "Ver"
transitionBtn.addEventListener('click', function() {
  firstContent.classList.add('hidden'); // Ocultar el primer contenido
  secondContent.classList.remove('hidden'); // Mostrar el segundo contenido
  
  setTimeout(CambiaMensaje, 5900); // Llamar a la función CambiaMensaje después de 5.9 segundos
});
//Botão de voltar ao topo

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var voltarAoTopoButton = document.getElementById('voltar-ao-topo');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    voltarAoTopoButton.style.display = 'block';
  } else {
    voltarAoTopoButton.style.display = 'none';
  }
}

function scrollToTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

const imageLink = document.querySelector('nav a img');
const imageContainer = document.querySelector('.image-container');

imageLink.addEventListener('mouseover', function () {
  imageContainer.src = '../Ícones/Login2.png';
});

imageLink.addEventListener('mouseout', function () {
  imageContainer.src = '../Ícones/Login.png';
});

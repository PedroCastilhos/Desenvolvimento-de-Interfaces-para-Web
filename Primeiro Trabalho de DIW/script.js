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

mostrarModal = (modalID) => {
  const modal = document.getElementById(modalID);
  if(modal){
      modal.classList.add('Mostrar');
      modal.addEventListener('click', (e) =>{
          if(e.target.id == modalID || e.target.className == 'FecharModal'){
              modal.classList.remove('Mostrar')
          }
      });
  }
}
const camisa1 = document.getElementById('camisa1');
camisa1.addEventListener('click', () => mostrarModal('item1'));

const camisa2 = document.getElementById('camisa2');
camisa2.addEventListener('click', () => mostrarModal('item2'));

const camisa3 = document.getElementById('camisa3');
camisa3.addEventListener('click', () => mostrarModal('item3'));

const camisa4 = document.getElementById('camisa4');
camisa4.addEventListener('click', () => mostrarModal('item4'));

const calca1 = document.getElementById('calca1');
calca1.addEventListener('click', () => mostrarModal('item5'));

const calca2 = document.getElementById('calca2');
calca2.addEventListener('click', () => mostrarModal('item6'));

const calca3 = document.getElementById('calca3');
calca3.addEventListener('click', () => mostrarModal('item7'));

const calca4 = document.getElementById('calca4');
calca4.addEventListener('click', () => mostrarModal('item8'));

const tenis1 = document.getElementById('tenis1');
tenis1.addEventListener('click', () => mostrarModal('item9'));

const tenis2 = document.getElementById('tenis2');
tenis2.addEventListener('click', () => mostrarModal('item10'));

const tenis3 = document.getElementById('tenis3');
tenis3.addEventListener('click', () => mostrarModal('item11'));

const tenis4 = document.getElementById('tenis4');
tenis4.addEventListener('click', () => mostrarModal('item12'));

var filtros = document.querySelectorAll(".filtro");

filtros.forEach(function(filtro) {
  filtro.addEventListener("click", function() {
    // obtém a categoria selecionada pelo usuário
    var categoria = this.dataset.categoria;

    // seleciona todos os itens da página
    var itens = document.querySelectorAll(".Itens");

    // esconde todos os itens
    itens.forEach(function(item) {
      item.style.display = "none";
    });

    // se a categoria selecionada for "todos", mostra todos os itens
    if (categoria == "todos") {
      itens.forEach(function(item) {
        item.style.display = "inline-block";
      });
    } else {
      // seleciona os itens da categoria selecionada
      var itensFiltrados = document.querySelectorAll(".Itens[data-categoria='" + categoria + "']");
      // mostra os itens da categoria selecionada
      itensFiltrados.forEach(function(item) {
        item.style.display = "inline-block";
      });
    }
  });
});

/////////////
function filtrarProdutos(categoria) {
  // Esconder todos os itens
  var itens = document.querySelectorAll('.Itens');
  itens.forEach(function(item) {
  item.style.display = 'none';
  });
  
  // Mostrar todos os itens se a categoria não for informada ou for "todos"
  if (!categoria || categoria === "todos") {
  itens.forEach(function(item) {
  item.style.display = 'inline-block';
  });
  }
  // Mostrar apenas os itens da categoria especificada
  else {
  itens = document.querySelectorAll('.Itens[data-categoria="' + categoria + '"]');
  itens.forEach(function(item) {
  item.style.display = 'inline-block';
  });
  }
  }
  
  window.addEventListener('load', function() {
  var categoria = new URLSearchParams(window.location.search).get('categoria');
  filtrarProdutos(categoria);
  });


document.querySelector('.categ1').addEventListener('click', function() {
  window.location.href = './carrinho.html?categoria=calçados';
});

document.querySelector('.categ2').addEventListener('click', function() {
  window.location.href = './carrinho.html?categoria=blusas';
});

document.querySelector('.categ3').addEventListener('click', function() {
  window.location.href = './carrinho.html?categoria=calças';
});

document.querySelector('.categ4').addEventListener('click', function() {
  window.location.href = './carrinho.html';
});



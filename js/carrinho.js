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
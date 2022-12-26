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



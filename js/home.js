 // Obtém a lista de todos os cards de produtos
 const cards = document.querySelectorAll('.card');

 // Oculta todos os cards, exceto os 4 primeiros
 for (let i = 4; i < cards.length; i++) {
   cards[i].style.display = 'none';
 }

 // Adiciona um evento de clique ao botão de avançar
 document.getElementById('btn-next').addEventListener('click', function() {
   // Oculta os 4 primeiros cards
   for (let i = 0; i < 4; i++) {
     cards[i].style.display = 'none';
   }
   // Mostra os próximos 4 cards
   for (let i = 4; i < 8; i++) {
     cards[i].style.display = 'inline-block';
 
   }
   
 });

 // Adiciona um evento de clique ao botão de voltar
 document.getElementById('btn-prev').addEventListener('click', function() {
   // Oculta os últimos 4 cards
   for (let i = 4; i < 8; i++) {
     cards[i].style.display = 'none';
   }
   // Mostra os 4 cards anteriores
   for (let i = 0; i < 4; i++) {
     cards[i].style.display = 'inline-block';
   }
 });




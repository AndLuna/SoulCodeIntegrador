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



// janela modal

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');


// criei as variaveis que eu iria utilizar pegando os valores pelo ID
// depois atribuir em cada ifElse suas caracteristicas
// Exceto o modalTitle, achei melhor vincula-lo diretamente
// ao valor que eu colocar na tag h3 em title-tendencia[1...4]

function showModal(cardId) {
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const modalValor = document.getElementById('modal-valor');
  
  if (cardId === 1) {
    const h3 = document.getElementById('title-tendencia1');

    modalImage.src = '/images/trend1.png';
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent =
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
    modalValor.textContent  = '299,99R$'
 
  } else if (cardId === 2) {
    const h3 = document.getElementById('title-tendencia2');
    
    modalImage.src = '/images/trend2.png';
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
    modalValor.textContent  = '299,99R$'

  } else if (cardId === 3) {
    const h3 = document.getElementById('title-tendencia3');

    modalImage.src = '/images/trend3.png';
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
      modalValor.textContent  = '299,99R$'

  } else if (cardId === 4) {
    const h3 = document.getElementById('title-tendencia4');

    modalImage.src = '/images/trend4.png';
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent =
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
     modalValor.textContent  = '299,99R$'

  } else {
    console.log('Invalid card ID');
  }
  

  


  // Display do modal
  modal.style.display = 'block';
}

function hideModal() {
  // escondendno o modal
  modal.style.display = 'none';
}

// se o usuario clicar fora do modal = fecha o modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    hideModal();
  }
});

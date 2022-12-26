
 
//  secao de destaque
 // Obtém a lista de todos os card de produtos
 const card_destaque = document.querySelectorAll('.destaque-card');

 // Oculta todos os card, exceto os 5 primeiros
 for (let i = 5; i < card_destaque.length; i++) {
  card_destaque[i].style.display = 'none';
 }

 // Adiciona um evento de clique ao botão de avançar
 document.getElementById('btn-next').addEventListener('click', function() {
   // Oculta os 4 primeiros card
   for (let i = 0; i < 5; i++) {
    card_destaque[i].style.display = 'none';
   }
   // Mostra os próximos 4 card
   for (let i = 5; i < 10; i++) {
    card_destaque[i].style.display = 'inline-block';
 
   }
   
 });

 // Adiciona um evento de clique ao botão de voltar
 document.getElementById('btn-prev').addEventListener('click', function() {
   // Oculta os últimos 4 card
   for (let i = 5; i < 10; i++) {
    card_destaque[i].style.display = 'none';
   }
   // Mostra os 4 card anteriores
   for (let i = 0; i < 5; i++) {
    card_destaque[i].style.display = 'inline-block';
   }
 });



//                                         janela modal

// criei as variaveis que eu iria utilizar pegando os valores pelo ID
// depois atribuir em cada ifElse suas caracteristicas
// Exceto o modalTitle, achei melhor vincula-lo diretamente
// ao valor que eu colocar na tag h3 em title-tendencia[1...4]

//o ideal seria criar no HTML, mas estava bugando.

// deixar modal como let em vez de const para que event de hidden funcione
let modal;

function showModal(event, cardId) {
  event.preventDefault();
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const modalValor = document.getElementById('modal-valor');
  
  if (cardId === 1) {
    const h3 = document.getElementById('title-tendencia1');
    const img = document.getElementById('tendencia_imagem1');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent =
     'O novo casaco SoulCoder SF.T7 vem sendo cada vez mais utilizado em todos os lugares e isso é devido a nova tenologia inserida nesse produto, a novo casaco Soul Coder SF.T7 conta com uma moderna tecnologia que permite que você possa recarregar seu smart phone ao coloca-lo no bolso, a tecnologia funciona por indussão, ou seja, basta jogar seu aparelho no bolso e ficar despreocupado';
    modalValor.textContent  = '299,99R$'
 
  } else if (cardId === 2) {
    const h3 = document.getElementById('title-tendencia2');
    const img = document.getElementById('tendencia_imagem2');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
    modalValor.textContent  = '199,99R$'

  } else if (cardId === 3) {
    const h3 = document.getElementById('title-tendencia3');
    const img = document.getElementById('tendencia_imagem3');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
    modalValor.textContent  = '99,99R$'

  } else if (cardId === 4) {
    const h3 = document.getElementById('title-tendencia4');
    const img = document.getElementById('tendencia_imagem4');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim quibusdam molestiae aut nisi, voluptate libero accusamus neque numquam sed reiciendis perspiciatis dolor sunt ullam nihil. Facilis saepe aspernatur eveniet!';
    modalValor.textContent  = '49,99R$'
  }

  //tornando o modal visivel
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

//agora esconder o modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

//evento de janela, se o usuario clicar fora da janela do modal, ele sera fechado
window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// testando botao categoria



// dot de paginacao
// Cria as bolinhas de paginação


////////////////////////////////////////////////////////


// Obtém a lista de todos os card de produtos
// const skills = document.querySelectorAll('.skills');

// // Oculta todos os card, exceto os 4 primeiros
// for (let i = 3; i < skills.length; i++) {
//   skills[i].style.display = 'none';
// }

// // Adiciona um evento de clique ao botão de avançar
// document.getElementById('btn-next2').addEventListener('click', function() {
//   // Oculta os 4 primeiros card
//   for (let i = 0; i < 3; i++) {
//     skills[i].style.display = 'none';
//   }
//   // Mostra os próximos 4 card
//   for (let i = 3; i < 6; i++) {
//     skills[i].style.display = 'inline-block';

//   }
  
// });

// Adiciona um evento de clique ao botão de voltar
// document.getElementById('btn-prev2').addEventListener('click', function() {
//   // Oculta os últimos 4 card
//   for (let i = 3; i < 6; i++) {
//     skills[i].style.display = 'none';
//   }
//   // Mostra os 4 card anteriores
//   for (let i = 0; i < 3; i++) {
//     skills[i].style.display = 'inline-block';
//   }
// });





//////////////////////////////////////////////


//  // Obtém a lista de todos os card de produtos
//  const skills = document.querySelectorAll('.skills');

//  // Oculta todos os card, exceto os 4 primeiros
//  for (let i = 3; i < skills.length; i++) {
//    skills[i].style.display = 'none';
//  }

//  // Adiciona um evento de clique ao botão de avançar
//  document.getElementById('btn-next2').addEventListener('click', function() {
//    // Oculta os 4 primeiros card
//    for (let i = 0; i < 3; i++) {
//      skills[i].style.display = 'none';
//    }
//    // Mostra os próximos 4 card
//    for (let i = 3; i < 6; i++) {
//      skills[i].style.display = 'inline-block';
 
//    }
   
//  });

//  // Adiciona um evento de clique ao botão de voltar
//  document.getElementById('btn-prev2').addEventListener('click', function() {
//    // Oculta os últimos 4 card
//    for (let i = 3; i < 6; i++) {
//      skills[i].style.display = 'none';
//    }
//    // Mostra os 4 card anteriores
//    for (let i = 0; i < 3; i++) {
//      skills[i].style.display = 'inline-block';
//    }
//  });






 

// secao carrossel produtos novidades
// const cards = document.querySelectorAll('.skills');
// const controls = document.querySelectorAll('.control');

// let currentCard = 0;
// let isAnimating = false;

// function showCard(card) {
//   if (!isAnimating) {
//     isAnimating = true;

//     cards[currentCard].classList.add('hidden');
//     cards[currentCard].classList.remove('active');
//     cards[card].classList.add('active');
//     cards[card].classList.remove('hidden');

//     currentCard = card;

//     isAnimating = false;
//   }
// }

// function nextCard() {
//   let next = currentCard + 2;

//   if (next >= cards.length) {
//     next = 0;
//   }

//   showCard(next);
// }

// function prevCard() {
//   let prev = currentCard - 2;

//   if (prev < 0) {
//     prev = cards.length - 2;
//   }

//   showCard(prev);
// }

// controls.forEach(control => control.addEventListener('click', e => {
//   if (e.target.classList.contains('right')) {
//     nextCard();
//   } else {
//     prevCard();
//   }
// }));

// setInterval(nextCard, 1000);





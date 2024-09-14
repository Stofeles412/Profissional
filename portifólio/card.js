// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const prevButton = document.getElementById('prevCard');
    const nextButton = document.getElementById('nextCard');
    
    let currentIndex = 0;
  
    function showCard(index) {
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
      });
    }
  
    function showNextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    }
  
    function showPrevCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    }
  
    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);
  
    // Inicializa o primeiro cartão como visível
    showCard(currentIndex);
  });
  
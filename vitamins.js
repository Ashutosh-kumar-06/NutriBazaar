
     const productCards = document.querySelectorAll('.dynamic-color');
     productCards.forEach(card => {
         card.addEventListener('mouseover', () => {
             card.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 85%)`;
         });
         card.addEventListener('mouseout', () => {
             card.style.backgroundColor = '#fff';
         });
     });
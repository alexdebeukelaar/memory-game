const randomizeCards = () => {
    cards = shuffleGrid([...cards]);
    console.log(cards);
    grid.innerHTML = '';
    cards.forEach((card) => {
      grid.appendChild(card);
      console.log(card.children);
    });
  };
  const revealCard = (target) => {
    target.classList.toggle('show');
    target.classList.toggle('disabled');
  };
  
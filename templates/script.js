function archiveCard(card) {
    const archivedCards = JSON.parse(localStorage.getItem('archivedCards')) || [];
    const cardData = {
      title: card.querySelector('h2').innerText,
      content: card.querySelector('p').innerText
    };
    archivedCards.push(cardData);
    localStorage.setItem('archivedCards', JSON.stringify(archivedCards));
    card.remove();
  }
  
  function displayArchivedCards() {
    const archive = document.getElementById('archive');
    const archivedCards = JSON.parse(localStorage.getItem('archivedCards')) || [];
    archivedCards.forEach(cardData => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${cardData.title}</h2>
        <p>${cardData.content}</p>
      `;
      archive.appendChild(card);
    });
  }
  function archiveCard(card) {
    const archive = document.getElementById('archive');
    const clonedCard = card.cloneNode(true);
    archive.appendChild(clonedCard);
    card.remove();
  }
  
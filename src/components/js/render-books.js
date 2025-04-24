document.addEventListener("DOMContentLoaded", () => {
  fetch("/data/main-books.json")
    .then(res => res.json())
    .then(data => renderSections(data))
    .catch(err => {
      console.error("Ошибка загрузки книг:", err);
    });
});

function renderSections(sections) {
  const container = document.body;

  Object.entries(sections).forEach(([sectionTitle, books]) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';

    sectionDiv.innerHTML = `
      <h2>${sectionTitle}</h2>
      <p>${getSectionDescription(sectionTitle)}</p>
      <div class="book-list">
        ${books.map(book => `
          <div class="book-card" title="${book.title}">
            <img src="${book.img}" alt="${book.title}">
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(sectionDiv);
  });
}

function getSectionDescription(title) {
  switch (title) {
    case 'Новое': return 'Новинки для обмена';
    case 'Популярное': return 'Самые просматриваемые книги';
    case 'Книги в Саратове': return 'Доступные для обмена книги';
    default: return '';
  }
}

const sections = [
    {
      title: 'Новое',
      description: 'Новинки для обмена',
      books: [
        { title: 'Сияние', img: '../public/books/shine.jpg' },
        { title: 'Отцы и дети', img: '../public/books/turgenev.jpg' },
        { title: 'Портрет Дориана Грея', img: '../public/books/wilde.jpg' }
      ]
    },
    {
      title: 'Популярное',
      description: 'Самые просматриваемые книги',
      books: [
        { title: 'Цветы для Элджернона', img: '../public/books/flowers.png' },
        { title: '1984', img: '../public/books/1984.jpg' },
        { title: 'Лолита', img: '../public/books/lolita.jpg' }
      ]
    },
    {
      title: 'Книги в Саратове',
      description: 'Доступные для обмена книги',
      books: [
        { title: 'Город солнца', img: '../public/books/sun.jpg' },
        { title: 'Улисс', img: '../public/books/ulysses.jpg' },
        { title: 'Мастер и Маргарита', img: '../public/books/master.jpg' }
      ]
    }
  ];
  
  const container = document.body;
  
  sections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
  
    sectionDiv.innerHTML = `
      <h2>${section.title}</h2>
      <p>${section.description}</p>
      <div class="book-list">
        ${section.books.map(book => `
          <div class="book-card" title="${book.title}">
            <img src="${book.img}" alt="${book.title}">
          </div>
        `).join('')}
      </div>
    `;
  
    container.appendChild(sectionDiv);
  });
  
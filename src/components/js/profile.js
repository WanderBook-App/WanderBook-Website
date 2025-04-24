const USE_MOCK = false;

const mockUser = {
  name: "Дарья",
  avatar: "../public/ping.png",
  registeredAt: "2025-01-01",
  favoriteGenre: "Роман",
  bookCount: 56
};

const mockMyBooks = [
  { title: "Мастер и Маргарита", author: "Булгаков", image: "../public/books/shine.jpg" },
  { title: "Преступление и наказание", author: "Достоевский", image: "../public/books/1984.jpg" },
];

const mockFavorites = [
  { title: "Лолита", author: "Набоков", image: "../public/books/lolita.jpg" },
];

document.addEventListener("DOMContentLoaded", async () => {
  let userData, myBooks, favorites;

  if (USE_MOCK) {
    userData = mockUser;
    myBooks = mockMyBooks;
    favorites = mockFavorites;
  } else {
    userData = await fetchJSON('/data/user.json');
    const booksData = await fetchJSON('/data/books.json');    
    myBooks = booksData.myBooks;
    favorites = booksData.favorites;
  }

  renderProfile(userData);
  renderBooks(myBooks);

  const btnMy = document.getElementById("btn-my-books");
  const btnFav = document.getElementById("btn-fav-books");

  btnMy.addEventListener("click", () => {
    setActiveTab(btnMy);
    renderBooks(myBooks);
  });

  btnFav.addEventListener("click", () => {
    setActiveTab(btnFav);
    renderBooks(favorites);
  });
});

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Ошибка загрузки ${url}`);
  return await response.json();
}

function renderProfile(user) {
  document.getElementById("username").textContent = user.name;
  document.getElementById("avatar").src = user.avatar;

  const date = new Date(user.registeredAt);
  const year = date.getFullYear();
  document.getElementById("user-date").textContent = `с ${year} года`;

  document.getElementById("book-count").textContent = `📚 ${user.bookCount} книг`;
  document.getElementById("user-genre").textContent = `⭐ ${user.favoriteGenre}`;
}

function renderBooks(bookList) {
  const container = document.getElementById("books-container");
  container.innerHTML = "";
  bookList.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <div class="book-info">
          <div class="book-title">${book.title}</div>
          <div class="book-author">${book.author}</div>
        </div>
      </div>
    `;
  });
}

function setActiveTab(button) {
  document.querySelectorAll(".toggle-buttons button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

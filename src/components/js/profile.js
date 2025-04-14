// Включить/отключить заглушки
const USE_MOCK = true;

// Заглушки
const mockUser = {
  name: "Иван Иванов",
  avatar: "../public/logo2.svg",
  registeredAt: "2023-11-15", // ← добавлено
};

const mockMyBooks = [
  { title: "Мастер и Маргарита", author: "Булгаков", image: "../public/books/shine.jpg" },
  { title: "Преступление и наказание", author: "Достоевский", image: "../public/books/1984.jpg" },
];

const mockFavorites = [
  { title: "Лолита", author: "Набоков", image: "../public/books/lolita.jpg" },
];

// Загрузка данных
document.addEventListener("DOMContentLoaded", () => {
  if (USE_MOCK) {
    renderProfile(mockUser);
    renderBooks(mockMyBooks);
  }

  const btnMy = document.getElementById("btn-my-books");
  const btnFav = document.getElementById("btn-fav-books");

  btnMy.addEventListener("click", () => {
    setActiveTab(btnMy);
    renderBooks(mockMyBooks);
  });

  btnFav.addEventListener("click", () => {
    setActiveTab(btnFav);
    renderBooks(mockFavorites);
  });
});

// UI-helpers
function renderProfile(user) {
  document.getElementById("username").textContent = user.name;
  document.getElementById("avatar").src = user.avatar;
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


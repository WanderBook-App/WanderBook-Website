document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    console.log({ username, email, password });
    try {
      // const response = await fetch('https://localhost:3443/auth/register/', {
      const response = await fetch('http://109.73.196.216:8000/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Ошибка регистрации: ' + (errorData.detail?.[0]?.msg || 'Неизвестная ошибка'));
        return;
      }

      const data = await response.json();
      console.log('Успешная регистрация', data);
      alert('Регистрация прошла успешно!');
      window.location.href = '/login.html';
    } catch (err) {
      alert('Ошибка сервера: ' + err.message);
    }
  });
});
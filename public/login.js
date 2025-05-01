document.getElementById('login-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    // const response = await fetch('https://happy-hotels-admire.loca.lt/auth/login/', {
    const response = await fetch('http://109.73.196.216:8000/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    // const response = await fetch('https://localhost:3443/auth/login/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email, password })
    // });

    if (!response.ok) {
      const errorData = await response.json();
      alert('Ошибка входа: ' + (errorData.detail?.[0]?.msg || 'Неверные данные'));
      return;
    }

    const data = await response.json();
    console.log('Успешный вход', data);
    // Здесь можно сохранить токен, если он придёт
    // localStorage.setItem('token', data.token);

    window.location.href = "/main.html";
  } catch (err) {
    alert('Ошибка сервера: ' + err.message);
  }
});

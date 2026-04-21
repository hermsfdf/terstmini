// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;

    tg.ready();
    tg.expand();

    // 1. Установка цвета заголовка (лучше делать сразу)
    tg.setHeaderColor('secondary_bg_color');

    // 2. Работа с пользователем
    const user = tg.initDataUnsafe?.user;
    const userNameEl = document.getElementById("username");
    if (user && userNameEl) {
        userNameEl.innerText = user.first_name;
    }

    // 3. Рандомное приветствие
    const greetings = ["Привет", "Рады видеть", "Ассалам алейкум", "Будь добрее сегодня"];
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingEl.textContent = randomGreeting;
    }

    // 4. Функция переключения страниц
    function goToPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.style.display = 'none');

        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.style.display = 'block';
        }

        // Управление кнопкой "Назад"
        if (pageId === 'page1') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }

    // 5. Обработка кнопки "Назад" (современный стиль)
    tg.BackButton.onClick(() => {
        // Здесь можно добавить логику проверки текущей страницы,
        // но пока просто возвращаем на главную
        goToPage('page1');
    });

    // 6. Обработчики кликов с проверкой на существование элементов
    const vibeBtn = document.getElementById("vibeBtn");
    if (vibeBtn) {
        vibeBtn.addEventListener("click", () => {
            tg.showAlert("В разработке");
            tg.HapticFeedback.notificationOccurred('success');
        });
    }

    const closeBtn = document.getElementById("closeBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            tg.close();
        });
    }
    
    // Сделаем функцию глобальной, если вы вызываете её из HTML (onclick="goToPage('...')")
    window.goToPage = goToPage;
});

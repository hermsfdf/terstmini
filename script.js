        // Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
const ADMIN_ID = 1378112233;

tg.expand(); // Развернуть на весь экран

const user = tg.initDataUnsafe?.user;
const userNameEl = document.getElementById("username");
if (user && userNameEl) {
    userNameEl.innerText = user.first_name;
}

const greetings = ["Привет", "Рады видеть", "Ассалам алейкум", "Будь добрее сегодня", "Вы находитесь в уголовном розыске Уганды", "Ну купи скинчик"];
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingEl.textContent = randomGreeting;
}


        // Функция переключения страниц
function openPage(pageNum, btn) {
            // Убираем активный класс у всех страниц и кнопок
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

            // Добавляем активный класс выбранным
    document.getElementById('page' + pageNum).classList.add('active');
    btn.classList.add('active');

            // Легкая вибрация при нажатии (только в Telegram)
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    // Скрываем все страницы
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });

    // Показываем нужную страницу
    const activePage = document.getElementById(pageId);
    if (activePage) {
        // Используем flex вместо block, чтобы цифры 1,2,3... 
        // оставались по центру экрана, как в стилях
        activePage.style.display = 'flex'; 
        activePage.classList.add('active');
    }

    // Логика кнопки "Назад" (сейчас она везде скрывается по твоему коду)
    if (pageId === 'page1') {
        tg.BackButton.hide();
    } else {
        tg.BackButton.hide();
    }

    // Добавим визуальный акцент на кнопках меню
    updateNavButtons(pageId);
}

// Функция для подсветки активной кнопки в меню
function updateNavButtons(pageId) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn, index) => {
        if (pageId === `page${index + 1}`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Инициализация первой страницы при запуске
goToPage('page1');

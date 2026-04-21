        // Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть на весь экран

const user = tg.initDataUnsafe?.user;

const greetings = ["Привет", "Рады видеть", "Ассалам алейкум", "Будь добрее сегодня"];
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

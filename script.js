        // Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть на весь экран

const user = tg.initDataUnsafe?.user;
const greetingElement = document.getElementById('greeting');
        
if (user && user.first_name) {
     greetingElement.innerText = `Ассалам алейкум, ${user.first_name}!`;
} else {
    greetingElement.innerText = `Ассалам алейкум, Гость!`;
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

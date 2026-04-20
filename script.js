// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();
tg.expand(); // Разворачиваем на всё окно

// Устанавливаем имя пользователя из данных TG
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById("username").innerText = user.first_name;
}

const greetings = ["Привет", "Рады видеть"];

const greetingEl = document.getElementById("greeting");

if (greetingEl) {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingEl.textContent = randomGreeting;
}
// 1. Управление Главной кнопкой (MainButton) внизу экрана

tg.MainButton.setText("ПОДТВЕРДИТЬ");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.showAlert("Вы нажали на главную кнопку!");
});


// 2. Вибрация при нажатии на кнопку в интерфейсе
const videBtn = document.getElementById("videBtn");
if (videBtn) {

    vibeBtn.addEventListener.addEventListener("click", () => {
        tg.showAlert("В разработке");
        tg.HapticFeedback.notificationOccurred('success');
    });
}

// 3. Закрытие приложения
const closeBtn = document.getElementById("closeBtn")
if (closeBtn) {
    document.addEventListener("click", () => {
        tg.close();
    });
}

// 4. Кнопка "Назад" в заголовке (появляется и исчезает)
tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.showAlert("Кнопка назад пока просто показывает это окно");
});

// Настройка цвета статус-бара в тон темы
tg.setHeaderColor('secondary_bg_color');

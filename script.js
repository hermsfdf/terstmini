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

// 1. Управление Главной кнопкой (MainButton) внизу экрана
tg.MainButton.setText("ПОДТВЕРДИТЬ");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.showAlert("Вы нажали на главную кнопку!");
});

// 2. Вибрация при нажатии на кнопку в интерфейсе
document.getElementById("vibeBtn").addEventListener("click", () => {
    tg.showAlert("В разработке");
    tg.HapticFeedback.notificationOccurred('success');
});

// 3. Закрытие приложения
document.getElementById("closeBtn").addEventListener("click", () => {
    tg.close();
});

// 4. Кнопка "Назад" в заголовке (появляется и исчезает)
tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.showAlert("Кнопка назад пока просто показывает это окно");
});

// Настройка цвета статус-бара в тон темы
tg.setHeaderColor('secondary_bg_color');

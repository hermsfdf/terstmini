const tg = window.Telegram.WebApp;
tg.expand();

// Основная кнопка Telegram (внизу экрана)
tg.MainButton.setText("ОТПРАВИТЬ ДАННЫЕ").show();
tg.MainButton.onClick(() => {
    tg.sendData("Какая-то важная информация"); 
    // sendData работает только если Mini App открыт через KeyboardButton
});

// Работа с данными пользователя
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById("user").innerText = user.first_name;
}

// Пример функции: вибрация (Haptic Feedback)
function triggerVibration() {
    tg.HapticFeedback.impactOccurred('heavy');
}

// Пример функции: открытие ссылок внутри TG
function openInternalLink() {
    tg.openTelegramLink('https://t.me/durov');
}

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;
const userNameEl = document.getElementById("username");
if (user && userNameEl) {
    userNameEl.innerText = user.first_name;
}

const greetings = ["Привет", "Рады видеть", "Ассалам алейкум", "Будь добрее сегодня"];
const greetingEl = document.getElementById("greeting");
if (greeting) {
    const randomGreeting = greetings[Math.florr(Math.random() * greetings.length)];
    greetingEl.textContent = randomGreeting;
}

tg.MainButton.setText("SWEGENSTAN");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.showAlert("Вы нажали на кнопку");
});

const vibeBtn = document.getElementById("vibeBtn")
if (vibeBtn) {
    vibeBtn.addEventListener("click", () => {
        tg.showAlert("В разработке");
        tg.HapticFeedBack.notificationOccurred('success');
    });
}

tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.showAlert("Кнопка пока не работает");
});

tg.setHeaderColor('secondary_bg_color');

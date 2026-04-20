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
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingEl.textContent = randomGreeting;
}

tg.MainButton.setText("SWEGENSTAN");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.showAlert("Вы нажали на кнопку");
});

function openSecond() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('secondMenu').style.display = 'block';
}
function back() {
    document.getElementById('secondMenu').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
}

const vibeBtn = document.getElementById("vibeBtn")
if (vibeBtn) {
    vibeBtn.addEventListener("click", () => {
        tg.showAlert("В разработке");
        tg.HapticFeedBack.notificationOccurred('success');
    });
}

const closeBtn = document.getElementById("closeBtn")
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        tg.close()
    });
}

tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.openTelegramLink("https://t.me/FlarionMinecraft_Bot");
});

tg.setHeaderColor('secondary_bg_color');

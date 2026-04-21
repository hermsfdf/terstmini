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

function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const activePage = document.GetElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }

    if (pageId === 'page1') {
        tg.BackButton.hide();
    } else {
        tg.BackButton.hide();
    }
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

tg.setHeaderColor('secondary_bg_color');

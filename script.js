        // Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
const ADMIN_ID = 1378112233;

tg.expand(); // Развернуть на весь экран

const user = tg.initDataUnsafe?.user;
const userNameEl = document.getElementById("username");
if (user && userNameEl) {
    userNameEl.innerText = user.first_name;
}
// Проверка на админа
if (user && user.id === ADMIN_ID) {
    const adminBtn = document.getElementById('admin-add-btn');
    if (adminBtn) {
        adminBtn.style.display = 'block';
    }
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

function toggleAdminModal() {
        const modal = document.getElementById('admin-modal');
        modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

function addNewItem() {
        const img = document.getElementById('item-img').value;
        const title = document.getElementById('item-title').value;
        const desc = document.getElementById('item-desc').value;
        const price = document.getElementById('item-price').value;

        if(!img || !title || !price) return alert("Заполни поля");

        const container = document.querySelector('#page1 .content-container');
        const cardHtml = `
                <div class="card">
                    <img src="${img}" alt="${title}">
                    <div class="card-info">
                        <h3 class="card-title">${title}</h3>
                        <p class="card-description">${desc}</p>
                        <div class="card-price">${price}</div>
                        <button class="buy-btn" onclick="alert('Добавлено!')">Купить</button>
                    </div>
                </div>
            `;

        container.insertAdjacentHTML('afterbegin', cardHtml);
        toggleAdminModal();

        document.getElementById('item-img').value = '';
        document.getElementById('item-title').value = '';
        document.getElementById('item-desc').value = '';
        document.getElementById('item-price').value = '';
}
        

// Инициализация первой страницы при запуске
goToPage('page1');


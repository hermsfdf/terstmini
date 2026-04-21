// Инициализация Telegram WebApp

const tg = window.Telegram.WebApp;

const ADMIN_ID = 1378112233; // Твой ID

tg.expand();

// Ждем полной загрузки страницы, прежде чем искать кнопку
window.addEventListener('load', () => {

    const user = tg.initDataUnsafe?.user;
    const adminBtn = document.getElementById('admin-add-btn');

    console.log("User ID:", user?.id); // Это поможет тебе увидеть свой ID в консоли (если подключен дебаг)

    // ПРОВЕРКА: Если зашел админ ИЛИ если мы в обычном браузере (для теста)
    if (user?.id === ADMIN_ID || !user) {

        if (adminBtn) {
            adminBtn.style.setProperty('display', 'block', 'important');
            console.log("Кнопка админа включена");
        }

    }

});

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
        // Используем flex вместо block
        activePage.style.display = 'flex'; 
        activePage.classList.add('active');
    }

    // Логика кнопки "Назад"
    if (pageId === 'page1') {
        tg.BackButton.hide();
    } else {
        tg.BackButton.hide();
    }

    // Подсветка кнопок
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

// Функция СОХРАНЕНИЯ в Firebase
async function addNewItem() {
    const { collection, addDoc } = window.dbFunctions;
    
    const img = document.getElementById('item-img').value;
    const title = document.getElementById('item-title').value;
    const desc = document.getElementById('item-desc').value;
    const price = document.getElementById('item-price').value;

    if(!img || !title || !price) return alert("Заполни поля");

    try {
        await addDoc(collection(window.db, "products"), {
            img, title, desc, price,
            createdAt: Date.now() // для сортировки
        });
        
        toggleAdminModal();
        // Очистка полей
        ['item-img', 'item-title', 'item-desc', 'item-price'].forEach(id => document.getElementById(id).value = '');
        
        // Сразу обновляем список на экране
        loadProducts(); 
    } catch (e) {
        alert("Ошибка базы данных: " + e.message);
    }
}

// Функция ЗАГРУЗКИ из Firebase
async function loadProducts() {
    const { collection, getDocs, query, orderBy } = window.dbFunctions;
    const container = document.querySelector('.content-container');
    
    // Очищаем контейнер перед загрузкой (чтобы не дублировать)
    container.innerHTML = ''; 

    const q = query(collection(window.db, "products"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        const item = doc.data();
        const cardHtml = `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <div class="card-info">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-description">${item.desc}</p>
                    <div class="card-price">${item.price}</div>
                    <button class="buy-btn" onclick="alert('Куплено!')">Купить</button>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Запускаем загрузку при старте
window.addEventListener('load', loadProducts);

// Инициализация первой страницы
goToPage('page1');

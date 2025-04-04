// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();

// Показать главную кнопку Telegram
tg.MainButton.setText("Вернуться в бота").show().onClick(() => {
    tg.close();
});

// Оплата через Telegram Stars
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        const price = button.getAttribute("data-price");
        const title = button.getAttribute("data-title");
        tg.sendData(JSON.stringify({ action: "buy", price: price, title: title }));
    });
});

// Оплата криптовалютой (пример с TON)
document.querySelectorAll(".crypto-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Оплата через TON. Интеграция с WalletPay или другим провайдером.");
        // Здесь добавьте вызов API криптоплатежа (например, WalletPay)
    });
});
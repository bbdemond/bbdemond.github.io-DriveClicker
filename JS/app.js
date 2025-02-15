const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let score = 0;

function incrementScore() {
    score += 1;
    document.getElementById('score').textContent = score;
    
    // Пример отправки данных в бота (можно использовать позже)
    tg.sendData(JSON.stringify({ score: score }));
}
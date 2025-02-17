const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let speed = 0;
let speedDecrease = 0.01;
let lastTime = performance.now();
const fixedTimeStep = 50;

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastTime;

    while (deltaTime >= fixedTimeStep) {
        updateSpeed();
        lastTime += fixedTimeStep;
        deltaTime -= fixedTimeStep;
    }
    updateUI();
    requestAnimationFrame(gameLoop);
}

function updateSpeed() {
    speed -= speedDecrease;
}

gameLoop();

function incrementSpeed() {
    speed += 1;
    updateUI();
    // Пример отправки данных в бота (можно использовать позже)
    tg.sendData(JSON.stringify({ score: speed }));
}

function updateUI(){
    document.getElementById('score').textContent = speed;
}
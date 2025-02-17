const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let distanceTravelled = 0
let speed = 0;
let timePassed = 0;
let speedDecrease = 0.01;
let lastTime = 0; 
const fixedTimeStep = 250; 

function gameLoop(currentTime) {
    if (lastTime === 0) lastTime = currentTime; 

    let deltaTime = currentTime - lastTime;

    updateSpeed(deltaTime);
    updateDistanceTravelled(deltaTime)
    timePassed += deltaTime/1000;

    updateUI();
    requestAnimationFrame(gameLoop); 
    
    
    document.getElementById('currentDeltaTime').textContent = deltaTime.toFixed(2);
    lastTime = currentTime;
}

function updateSpeed(deltaTime) {
    let currentDecrease = speedDecrease*(deltaTime/1000)
    if (speed - currentDecrease> 0){
        speed -= currentDecrease;
    }
    else{
        speed = 0;
    }
}
function updateDistanceTravelled(deltaTime){
    distanceTravelled += (speed/3.6) * (deltaTime/1000)
}

requestAnimationFrame(gameLoop); 

function incrementSpeed() {
    speed += 1;
    updateUI();
}

function updateUI() {
    document.getElementById('speed').textContent = speed.toFixed(2);
    document.getElementById('distanceTravelled').textContent = distanceTravelled.toFixed(2);
    document.getElementById('timePassed').textContent = timePassed.toFixed(2);
}
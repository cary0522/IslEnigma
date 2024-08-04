let isRaining = false;
let rainInterval;

function createRain() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.style.left = Math.random() * 100 + 'vw';
    rain.style.opacity = Math.random() * 0.4 + 0.1;
    rain.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';

    const banner = document.getElementById('roomBanner');
    banner.appendChild(rain);

    setTimeout(() => {
        rain.remove();
    }, 2000);
}

function startRain() {
    isRaining = true;
    rainInterval = setInterval(createRain, 10);
    document.getElementById('roomBanner').classList.add('raining');
}

function stopRain() {
    isRaining = false;
    clearInterval(rainInterval);
    // 移除所有現有的雨滴
    document.querySelectorAll('.rain').forEach(drop => drop.remove());
    document.getElementById('roomBanner').classList.remove('raining');
}

function toggleWeather() {
    if (isRaining) {
        stopRain();
    } else {
        startRain();
    }
}

function randomWeatherChange() {
    const shouldRain = Math.random() < 0.5;  // 50% 的機率下雨
    if (shouldRain && !isRaining) {
        startRain();
    } else if (!shouldRain && isRaining) {
        stopRain();
    }
}

// 初始天氣
randomWeatherChange();

// 每隔一段時間改變天氣
setInterval(randomWeatherChange, 10000);  // 每 10 秒改變一次天氣
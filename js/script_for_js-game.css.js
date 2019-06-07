//===========Забираем необходимые элементы из DOM==================
let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $gameTime = document.querySelector('#game-time');
let $app = document.querySelector('.app');
let $body = document.querySelector('body');
let $result = document.querySelector('#result');
let arrColor = [
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
];

let score = 0;
let isStartedGame = false;

//===========Прослушка событий==================
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);

//===========Функционал игры====================
function show($element) {
    $element.classList.remove('hide');
}

function hide($element) {
    $element.classList.add('hide');
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setGameScore() {
    $result.textContent = score.toString();
}

function setGameTime() {
    let time = parseInt($gameTime.value);
    $time.textContent = time.toFixed(1);
    show($timeHeader);
    hide($resultHeader);
}

function handleBoxClick(event) {
    if (!isStartedGame) {
        return
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}

function renderBox() {
    $game.innerHTML = '';
    let box = document.createElement('div');
    let boxSize = getRandom(30, 100);
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    box.setAttribute('data-box', 'true');
    $game.insertAdjacentElement('afterbegin', box);
    box.style.height = box.style.width = boxSize + 'px';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.classList.add('createdBox');
    //1ый вариант, генерим случайные 6 цифры и подставляем.
    // let randomColor = getRandom(100000, 999999);
    // box.style.background = '#' + randomColor;

    //2ый вариант, в начале создаем  массив
    var randomColorIndex = getRandom(0, arrColor.length);
    box.style.backgroundImage = arrColor[randomColorIndex];
}

function startGame() {
    score = 0;
    setGameTime();
    hide($start);
    $gameTime.setAttribute('disabled', 'true');
    $gameTime.removeAttribute('type');
    $gameTime.setAttribute('type', 'text');
    $gameTime.value = 'Заблокировано на время игры';
    $gameTime.classList.add('blockedInGameInput');
    isStartedGame = true;
    $app.classList.add('bgAppGameStart');
    $game.classList.add('bgGameGameStart');
    let interval = setInterval(function () {
        let time = parseFloat($time.textContent);
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);
    renderBox();
}

function endGame() {
    isStartedGame = false;
    setGameScore();
    show($start);
    show($resultHeader);
    hide($timeHeader);
    $game.innerHTML = '';
    $gameTime.removeAttribute('disabled');
    $gameTime.removeAttribute('type');
    $gameTime.setAttribute('type', 'number');
    $gameTime.value = 5;
    $gameTime.classList.remove('blockedInGameInput');
    $app.classList.remove('bgAppGameStart');
    $game.classList.remove('bgGameGameStart');
}

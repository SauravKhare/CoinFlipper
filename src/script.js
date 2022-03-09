const result = document.querySelector('.flip-result');
const button = document.querySelector('#coin-flipper');
const coinPossibilities = ['Heads', 'Tails'];

function coinFlip() {
    let coin = Math.floor(Math.random(coinPossibilities) * coinPossibilities.length);
    setTimeout(() => {
        result.innerText = coinPossibilities[coin];
    }, 800);
    
}

button.addEventListener('click', coinFlip);
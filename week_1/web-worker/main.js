// main.js

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('.result');

if (window.Worker) {
    let myWorker = new Worker("worker.js");

    num1.onchange = function () {
        myWorker.postMessage([num1.value, num2.value]);
    }

    num2.onchange = function () {
        myWorker.postMessage([num1.value, num2.value]);
    }

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
    }
    
}
else {
    console.log('Web workers not supported.');
}

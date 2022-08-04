// worker.js

onmessage = function (e) {
  console.log('Worker: Message received from main script');

  num1 = Number(e.data[0]);
  num2 = Number(e.data[1])

  if (isNaN(num1) || isNaN(num2)) {
    postMessage('非法输入');
  }
  else {
    const result = num1 + num2;
    postMessage(result);

    console.log('Worker: Posting message back to main script');
  }
}
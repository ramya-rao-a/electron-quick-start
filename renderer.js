// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const crashReporter = require('electron').crashReporter
const cp = require('child_process')

var button1 = document.createElement('button');
button1.textContent = 'Initialize Crash Reporter';
document.body.appendChild(button1);
button1.addEventListener('click', () => {
   crashReporter.start({
    productName: 'dummy-product',
    companyName: 'dummy-company',
    submitURL: 'http://localhost:8080/uploadDump/try'
  });
})

var button2 = document.createElement('button');
button2.textContent = 'Crash in the current Renderer process';
document.body.appendChild(button2);
button2.addEventListener('click', () => {
    process.crash();
})


var button3 = document.createElement('button');
button3.textContent = 'Crash in a child process via execFile';
document.body.appendChild(button3);
button3.addEventListener('click', () => {
   cp.execFile('./a.out', null)
})

var button4 = document.createElement('button');
button4.textContent = 'Crash in a child process in via execFile in a forked process';
document.body.appendChild(button4);
button4.addEventListener('click', () => {
     var forkedProcess1 = cp.fork('./forkedProcess1');
})


var button5 = document.createElement('button');
button5.textContent = 'Crash in a native module opened in a forked process';
document.body.appendChild(button5);
button5.addEventListener('click', () => {
    var forkedProcess2 = cp.fork('./forkedProcess2');
})


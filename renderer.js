// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const crashReporter = require('electron').crashReporter
const cp = require('child_process')

var button1 = document.createElement('button');
button1.textContent = 'Initialize Crash';
document.body.appendChild(button1);
button1.addEventListener('click', () => {
   crashReporter.start({
    productName: 'dummy-product',
    companyName: 'dummy-company',
    submitURL: 'http://localhost:8080/uploadDump/try'
  });
})

var button2 = document.createElement('button');
button2.textContent = 'Crash';
document.body.appendChild(button2);
button2.addEventListener('click', () => {
    process.crash();
})


var button3 = document.createElement('button');
button3.textContent = 'Crash in a child process';
document.body.appendChild(button3);
button3.addEventListener('click', () => {
   cp.execFile('./a.out', null)
})


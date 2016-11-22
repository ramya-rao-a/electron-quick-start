// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const crashReporter = require('electron').crashReporter


var button1 = document.createElement('button');
button1.textContent = 'Initialize Crash Reporter';
document.body.appendChild(button1);
button1.addEventListener('click', () => {
   crashReporter.start({
    productName: 'dummy-product-renderer',
    companyName: 'dummy-company-renderer',
    submitURL: 'http://localhost:8080/uploadDump/rendererDump'
  });
})

var button2 = document.createElement('button');
button2.textContent = 'Crash in the current Renderer process';
document.body.appendChild(button2);
button2.addEventListener('click', () => {
    process.crash();
})
#!/usr/bin/env node
process.chdir(__dirname);

var app = require('app');
var os = require('os');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1680, height: 1050, show: false, title: "AusIRC Shout"});

    // and load the index.html of the app.
    mainWindow.loadUrl('http://localhost:9000/');
  
    mainWindow.show();
  
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
    
    if (os.type() == "Darwin") {
        var appMenu = require("./src/app.js");
        var menu = require('menu');
        menu.setApplicationMenu(menu.buildFromTemplate(appMenu.MenuTemplate()));
    }
});

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

var cli = require("./src/command-line");

const { app, BrowserWindow } = require('electron');

// Erstelle ein Browserfenster
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // Lade deine index.html-Datei oder eine andere Startdatei
    mainWindow.loadFile('./src/index.html');

    // Öffne die Entwicklertools automatisch
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// App-Ereignisse
app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

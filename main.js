const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const win = new BrowserWindow({
        //title: 'To Do List',
        width: isDev ? 1000 : 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Open devtools if in dev env
    if (isDev) {
        win.webContents.openDevTools();
    }

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})
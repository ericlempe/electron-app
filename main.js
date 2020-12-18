const { app, BrowserWindow } = require('electron');
let win;
const appUrl = `file://${__dirname}/index.html`;

function createWindow()
{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        frame: true,
        transparent: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(appUrl);
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

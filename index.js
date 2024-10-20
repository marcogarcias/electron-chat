const { app, BrowserWindow, ipcMain } = require('electron');
const { contacts, chats } = require('./data');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('initContacts', contacts);
  }); 

  ipcMain.on('getChat', (event, idx) => {
    win.send('setChat', chats[idx]);
  });
}

app.whenReady().then(() => {
  createWindow();
});

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 490,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),  // istersen preload kullanabilirsin, şimdilik boş bırakabilirsin
      contextIsolation: true,    // güvenlik için açık tut
      nodeIntegration: false,    // node entegrasyonunu kapalı tut, web teknolojisi gibi çalışsın
    }
  });

  win.loadFile('index.html');

  // Geliştirme sırasında konsolu otomatik açmak istersen uncomment yapabilirsin:
  // win.webContents.openDevTools();
}

// Electron app hazır olduğunda pencereyi oluştur
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS'ta, açık pencere yoksa tekrar oluştur
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Tüm pencereler kapandığında uygulamayı kapat (macOS dışında)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


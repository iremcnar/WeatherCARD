const { contextBridge } = require('electron');

// Güvenli şekilde sadece gerekli API'leri expose etmek için contextBridge kullanıyoruz.
contextBridge.exposeInMainWorld('electronAPI', {
  // İleride burada IPC ya da başka fonksiyonlar ekleyebilirsin.
  // Örneğin, pencereyi kapatma fonksiyonu:
  closeWindow: () => {
    window.close();
  }
});


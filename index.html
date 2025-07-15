<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Hava Durumu Kartları</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(135deg, #f4d35e 0%, #ffeaa7 100%);
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    overflow-x: hidden;
    position: relative;
  }
.close-btn {
  position: fixed;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  background-color: #a66900;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.close-btn:hover {
  background-color: #805100;
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}



  .header {
    margin-top: 80px;
    text-align: center;
    color: #a66900;
    margin-bottom: 40px;
  }

  .header h1 {
    font-size: 2.5em;
    font-weight: 800;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }

  .header p {
    font-size: 1.2em;
    color: #8b6b00;
    font-weight: 500;
  }

  .control-section {
    width: 90%;
    max-width: 800px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  select {
    flex: 1;
    min-width: 300px;
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 15px;
    border: 3px solid #a66900;
    background-color: #fff8dc;
    color: #a66900;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  select:hover, select:focus {
    border-color: #805100;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  button {
    padding: 15px 35px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 15px;
    border: none;
    background: linear-gradient(135deg, #a66900 0%, #805100 100%);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }

  button:active {
    transform: translateY(-1px);
  }

  /* Ana Hava Durumu Gösterimi - EN ÜSTTE */
  .main-weather-display {
    width: 90%;
    max-width: 600px;
    background: rgba(255, 248, 220, 0.95);
    border-radius: 30px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    backdrop-filter: blur(15px);
    border: 3px solid rgba(166, 105, 0, 0.3);
    margin-bottom: 40px;
    min-height: 400px;
    transition: all 0.3s ease;
  }

  .main-weather-display img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 25px;
    margin-bottom: 30px;
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.2)) contrast(1.1) saturate(1.2);
  }

  .main-weather-display .weather-desc {
    font-size: 40px;
    font-weight: 900;
    color: #a66900;
    margin-bottom: 15px;
    text-align: center;
  }

  .main-weather-display .temperature {
    font-size: 56px;
    font-weight: 900;
    color: #805100;
    margin-bottom: 20px;
  }

  .main-weather-display .city-name {
    font-size: 28px;
    font-weight: 700;
    color: #8b6b00;
    margin-bottom: 10px;
  }

  .main-weather-display .details {
    font-size: 18px;
    color: #6b5500;
    text-align: center;
    font-weight: 500;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 30px;
  }

  .weather-card {
    background: rgba(255, 248, 220, 0.95);
    border-radius: 25px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    transition: all 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(166, 105, 0, 0.2);
    min-height: 400px;
  }

  .weather-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.2);
    border-color: #a66900;
  }

  .weather-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
  }

  .weather-card:hover::before {
    opacity: 1;
    top: -100%;
    left: -100%;
  }

  .weather-card img {
    width: 160px;
    height: 160px;
    object-fit: contain;
    border-radius: 20px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.15)) contrast(1.1) saturate(1.3) brightness(1.05);
  }

  .weather-card:hover img {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.2)) contrast(1.2) saturate(1.4) brightness(1.1);
  }

  .weather-card .title {
    font-size: 24px;
    font-weight: 800;
    color: #a66900;
    margin-bottom: 10px;
    text-align: center;
  }

  .weather-card .description {
    font-size: 16px;
    color: #8b6b00;
    text-align: center;
    font-weight: 500;
  }

  .loading {
    color: #a66900;
    font-size: 20px;
    font-weight: 600;
  }

  .error {
    color: #d63031;
    font-size: 18px;
    font-weight: 600;
  }

  /* Responsive tasarım */
  @media (max-width: 768px) {
    .control-section {
      flex-direction: column;
      gap: 15px;
    }
    
    select {
      min-width: 100%;
    }
    
    .cards-container {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .weather-card {
      min-height: 350px;
      padding: 30px 20px;
    }
    
    .weather-card img {
      width: 140px;
      height: 140px;
    }
    
    .main-weather-display {
      padding: 40px 30px;
      min-height: 350px;
    }
    
    .main-weather-display .weather-desc {
      font-size: 32px;
    }
    
    .main-weather-display .temperature {
      font-size: 48px;
    }

    .header {
      margin-top: 60px;
    }
  }
</style>
</head>
<body>
    <button class="close-btn" onclick="window.electronAPI.closeWindow()" title="Kapat">×</button>


  <div class="header">
    <h1>🌤️ Hava Durumu Kartları</h1>
    <p>Dünya başkentlerinin güncel hava durumunu keşfedin</p>
  </div>

<div class="control-section">
  <select id="citySelect" title="Başkent seçin">
    <option value="Istanbul,TR" selected>🇹🇷 İstanbul</option>
    <option value="Warsaw,PL">🇵🇱 Varşova</option>
    <option value="Vienna,AT">🇦🇹 Viyana</option>
    <option value="Amsterdam,NL">🇳🇱 Amsterdam</option>
    <option value="Brussels,BE">🇧🇪 Brüksel</option>
    <option value="Oslo,NO">🇳🇴 Oslo</option>
    <option value="Copenhagen,DK">🇩🇰 Kopenhag</option>
    <option value="Stockholm,SE">🇸🇪 Stockholm</option>
    <option value="Paris,FR">🇫🇷 Paris</option>
    <option value="Rome,IT">🇮🇹 Roma</option>
    <option value="Berlin,DE">🇩🇪 Berlin</option>
    <option value="Budapest,HU">🇭🇺 Budapeşte</option>
    <option value="Prague,CZ">🇨🇿 Prag</option>
  </select>
  <button id="showBtn">Hava Durumunu Göster</button>
</div>


  <!-- Ana Hava Durumu Gösterimi - EN ÜSTTE -->
  <div class="main-weather-display" id="mainWeatherDisplay">
    <img id="weatherImg" src="img/sunny.png" alt="Hava Durumu" />
    <div class="city-name" id="cityName">Şehir Seçin</div>
    <div class="weather-desc" id="weatherDesc">Hava Durumu</div>
    <div class="temperature" id="temperature">--°C</div>
    <div class="details" id="details">Hava durumunu görmek için yukarıdan bir şehir seçin ve butona tıklayın</div>
  </div>

  <!-- Hava Durumu Kartları -->
  <div class="cards-container">
    <div class="weather-card" data-weather="sunny">
      <img src="img/sunny.png" alt="Güneşli">
      <div class="title">Güneşli</div>
      <div class="description">Açık ve parlak hava</div>
    </div>
    
    <div class="weather-card" data-weather="cloudy">
      <img src="img/cloudy.png" alt="Bulutlu">
      <div class="title">Bulutlu</div>
      <div class="description">Kapalı ve bulutlu hava</div>
    </div>
    
    <div class="weather-card" data-weather="rainy">
      <img src="img/rainy.png" alt="Yağmurlu">
      <div class="title">Yağmurlu</div>
      <div class="description">Yağışlı ve nemli hava</div>
    </div>
    
    <div class="weather-card" data-weather="snowy">
      <img src="img/snowy.png" alt="Karlı">
      <div class="title">Karlı</div>
      <div class="description">Kar yağışlı ve soğuk hava</div>
    </div>
  </div>

<script>
  const apiKey = "924215d9db4650f6e8d3ae2e0bc10fa1";
  
  const citySelect = document.getElementById("citySelect");
  const showBtn = document.getElementById("showBtn");
  const weatherImg = document.getElementById("weatherImg");
  const weatherDesc = document.getElementById("weatherDesc");
  const temperature = document.getElementById("temperature");
  const cityName = document.getElementById("cityName");
  const details = document.getElementById("details");
  const mainWeatherDisplay = document.getElementById("mainWeatherDisplay");
  const weatherCards = document.querySelectorAll('.weather-card');

  // Hava durumu kartlarına hover efekti
  weatherCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const weatherType = this.dataset.weather;
      const img = this.querySelector('img');
      
      // Karta özel animasyon efekti
      this.style.transform = 'translateY(-10px) scale(1.05)';
      img.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      const img = this.querySelector('img');
      
      this.style.transform = 'translateY(0) scale(1)';
      img.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Karta tıklandığında o hava durumunu ana ekranda göster
    card.addEventListener('click', function() {
      const weatherType = this.dataset.weather;
      const title = this.querySelector('.title').textContent;
      const imgSrc = this.querySelector('img').src;
      
      weatherImg.src = imgSrc;
      weatherDesc.textContent = title;
      cityName.textContent = "Örnek Gösterim";
      temperature.textContent = getExampleTemp(weatherType);
      details.textContent = `${title} hava durumu örneği - Gerçek veri için yukarıdan şehir seçin`;
      
      // Ana karta vurgu efekti
      mainWeatherDisplay.style.borderColor = '#a66900';
      mainWeatherDisplay.style.boxShadow = '0 25px 80px rgba(166, 105, 0, 0.3)';
      
      // Yumuşak kaydırma efekti
      mainWeatherDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      setTimeout(() => {
        mainWeatherDisplay.style.borderColor = 'rgba(166, 105, 0, 0.3)';
        mainWeatherDisplay.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
      }, 2000);
    });
  });

  function getExampleTemp(weatherType) {
    const temps = {
      'sunny': '28°C',
      'cloudy': '18°C',
      'rainy': '15°C',
      'snowy': '-2°C'
    };
    return temps[weatherType] || '20°C';
  }

  function getWeatherImageAndDesc(weatherMain, weatherDescription) {
    const wm = weatherMain.toLowerCase();
    const wd = weatherDescription.toLowerCase();
    
    if (wm.includes("snow") || wd.includes("snow")) {
      return { img: "img/snowy.png", desc: "Karlı" };
    }
    if (wm.includes("rain") || wd.includes("rain") || wm.includes("drizzle")) {
      return { img: "img/rainy.png", desc: "Yağmurlu" };
    }
    if (wm.includes("cloud") || wd.includes("cloud")) {
      return { img: "img/cloudy.png", desc: "Bulutlu" };
    }
    if (wm.includes("clear") || wd.includes("clear")) {
      return { img: "img/sunny.png", desc: "Güneşli" };
    }
    
    // Varsayılan olarak güneşli
    return { img: "img/sunny.png", desc: "Güneşli" };
  }

  async function fetchWeather(city) {
    try {
      // Loading durumu
      details.textContent = "Yükleniyor...";
      details.className = "loading";
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
      const res = await fetch(url);
      
      if (!res.ok) throw new Error("Şehir bulunamadı");
      
      const data = await res.json();
      const weatherMain = data.weather[0].main;
      const weatherDescription = data.weather[0].description;
      const { img, desc } = getWeatherImageAndDesc(weatherMain, weatherDescription);
      
      // Ana ekranı güncelle
      weatherImg.src = img;
      weatherDesc.textContent = desc;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      cityName.textContent = data.name;
      
      // Detayları güncelle
      details.textContent = `Hissedilen: ${Math.round(data.main.feels_like)}°C | Nem: ${data.main.humidity}% | Basınç: ${data.main.pressure} hPa`;
      details.className = "details";
      
      // Başarılı yükleme animasyonu
      mainWeatherDisplay.style.transform = 'scale(1.05)';
      
      // Ana hava durumu gösterimini sayfanın üstüne kaydır
      mainWeatherDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      setTimeout(() => {
        mainWeatherDisplay.style.transform = 'scale(1)';
      }, 300);
      
    } catch (error) {
      console.error("Hava durumu alınamadı:", error);
      details.textContent = "❌ Hava durumu bilgisi alınamadı. Lütfen tekrar deneyin.";
      details.className = "error";
      weatherDesc.textContent = "Bilinmiyor";
      temperature.textContent = "--°C";
      cityName.textContent = "Hata";
      weatherImg.src = "img/cloudy.png";
      
      // Hata durumunda da üst kısma kaydır
      mainWeatherDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Event listeners
  showBtn.addEventListener("click", () => {
    const selectedCity = citySelect.value;
    if (selectedCity) {
      fetchWeather(selectedCity);
    }
  });

  // Enter tuşu ile de arama yapabilme
  citySelect.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchWeather(citySelect.value);
    }
  });

  // Sayfa yüklendiğinde varsayılan olarak Londra'yı göster
  window.addEventListener('load', () => {
    setTimeout(() => {
      fetchWeather("Istanbul,TR");
    }, 500);
  });
</script>
</body>
</html>
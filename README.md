# 🌦️ Weather App

A simple and beautiful weather application built with **React**, **Vite**, and **Tailwind CSS**. Instantly check the current weather for any city in the world!

---

## ✨ Features

- 🔍 **Search by City:** Enter any city name to get real-time weather data.
- 🌡️ **Current Weather:** Displays temperature, weather condition, humidity, wind speed, and visibility.
- 🕒 **Local Time:** Shows the local time of the searched city.
- 🎨 **Modern UI:** Responsive and attractive design using Tailwind CSS.
- ⚡ **Live Updates:** Fetches fresh data every time you search for a new city.
- 🚫 **Error Handling:** User-friendly error messages for invalid city names or network issues.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/weather-project.git
cd weather-project
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Set Up Weather API Key**

- This app uses [WeatherAPI.com](https://www.weatherapi.com/) for weather data.
- Get your free API key from [here](https://www.weatherapi.com/signup.aspx).
- Replace the `apiKey` value in [`src/components/WeatherCard .jsx`](src/components/WeatherCard%20.jsx):

  ```js
  const apiKey = "YOUR_API_KEY_HERE";
  ```

### 4. **Run the App**

```bash
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🖥️ How It Works

1. **Initial Load:**  
   The app shows the weather for the default city (`Sasaram`).

2. **Search:**  
   - Type a city name in the input box (e.g., `London`, `New York`, `Tokyo`).
   - The app fetches and displays the current weather for that city.

3. **Display:**  
   - City and country name
   - Local time
   - Weather icon and temperature (°C)
   - Weather condition (e.g., Sunny, Rainy)
   - Humidity, wind speed, and visibility

4. **Error Handling:**  
   - If the city is not found, an error message is shown.
   - If the input is empty or too short, no request is made.

### **Example**

- **Input:** `Delhi`
- **Output:**  
  - City: Delhi, India  
  - Local Time: 2025-04-23 15:00  
  - Temperature: 32°C  
  - Condition: Partly cloudy  
  - Humidity: 45%  
  - Wind: 10 km/h  
  - Visibility: 8 km

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WeatherAPI.com](https://www.weatherapi.com/)

---

## 📁 Project Structure

```
weather-project/
├── public/
├── src/
│   ├── components/
│   │   └── WeatherCard .jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🙏 Acknowledgements

- [WeatherAPI.com](https://www.weatherapi.com/) for free weather data.
- [Tailwind CSS](https://tailwindcss.com/) for awesome styling utilities.

---

**Enjoy using the Weather App!**
#  Weather Now

A simple and elegant **Weather Forecast Application** built using **React + Tailwind CSS** that allows users to check the current weather and 5-day forecast for any city using the **Open-Meteo public API**.

---

##  Live Demo
> (After deployment)  
 [View Live on CodeSandbox](YOUR_DEPLOYMENT_LINK_HERE)

---

##  ChatGPT Work Reference
As per Level 1 submission requirement, here is the ChatGPT working session link:  
(https://chatgpt.com/share/6908728f-60b4-8006-9c67-f3f38b40c0ce)

---

##  Features
Search weather by city name  
Displays temperature, humidity, wind speed, and condition description  
5-day forecast with daily temperature  
Dynamic background gradient based on temperature  
Responsive Glassmorphism UI with Tailwind CSS  
Uses public Open-Meteo API (no authentication required)

---

##  Tech Stack

**Frontend Framework:** React (Vite)  
**Styling:** Tailwind CSS  
**Data Source:** [Open-Meteo API](https://open-meteo.com/)  
**State Management:** React useState, useEffect hooks  
**Deployment:** CodeSandbox 

---

##  Setup Instructions

Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/weather-now.git
cd weather-now

Install dependencies
npm install

Run locally
npm run dev
The app will run on http://localhost:5173


Folder Structure

weather-now/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WeatherCard.jsx
│   │   └── Forecast.jsx
│   │
│   ├── utils/
│   │   ├── fetchWeatherData.js
│   │   ├── weatherIcons.js
│   │   └── backgroundHelper.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── README.md
└── vite.config.js

Example API Reference
Geocoding API (Get Coordinates by City Name):

https://geocoding-api.open-meteo.com/v1/search?name={city}


Weather Forecast API:


https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,weather_code&forecast_days=5&timezone=auto


How It Works
The user enters a city name in the search bar.

The app fetches the coordinates using Open-Meteo’s Geocoding API.

It then requests current weather + 5-day forecast for those coordinates.

Results are shown in a responsive UI with weather details and gradients.


Author
Nishanth M
nishanthmohanannair@gmail.com
https://github.com/NishanthMohanan



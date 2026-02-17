#  Weather Now

A simple and elegant **Weather Forecast Application** built using **React + Tailwind CSS** that allows users to check the current weather and 5-day forecast for any city using the **Open-Meteo public API**.

---

##  Features
Search weather by city name  
Displays temperature, humidity, wind speed, and condition description  
5-day forecast with daily temperature  
Dynamic background gradient based on temperature  
Responsive Glassmorphism UI with Tailwind CSS  
Uses public Open-Meteo API (no authentication required)

---

## Technologies Used

- **React** 19.1.1 – UI framework
- **Vite** 7.1.7 – Build tool & dev server
- **Tailwind CSS** 3.4.18 – Utility-first styling
- **Open-Meteo API** – Free weather data provider
- **ESLint** – Code quality tool

---


## Installation

**Clone repository:**
```bash
git clone https://github.com/NishanthMohanan/weather-now.git
cd weather-now
```

**Install dependencies:**
```bash
npm install
```

**Run development server:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm start
```

---

## Design Goals

- **Scalability** – Modular architecture for feature expansion
- **Reusability** – Shared components and utility functions
- **Security** – Secure API usage with no data exposure
- **Clean Architecture** – Clear separation of concerns
- **Enterprise Readiness** – Production-optimized builds and linting

---

## Key Features

- Search weather by city name with auto-suggestions
- Real-time weather data (temperature, humidity, wind speed)
- 5-day weather forecast with temperature trends
- Dynamic gradient backgrounds based on temperature
- Responsive glassmorphism UI design
- Public API integration (no authentication required)

## Architecture Overview

Modular component-based architecture with React hooks for state management:
- **Components:** Reusable UI modules (Header, WeatherCard, Forecast)
- **Utils:** Abstracted API calls and helper functions
- **Styling:** Tailwind CSS with responsive design patterns

## Security Features

- Public API endpoints only (no secrets exposed)
- Client-side data processing exclusively
- HTTPS-enforced API communications
- No sensitive user data persistence
- Zero external authentication requirements


---

## Author

**Nishanth M** 



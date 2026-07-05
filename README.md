# MIST: Urban Climate Infrastructure

## Overview
MIST is an AI-driven, IoT-integrated cooling infrastructure project designed for public bus stands. By utilizing high-pressure (1160 PSI) flash-evaporation misting and real-time environmental sensors, the system combats the Urban Heat Island effect while conserving water through a closed-loop recycled filtration system.

## Project Vision
Our goal is to transform "dumb" public infrastructure into intelligent, sustainable utility hubs that improve the daily quality of life for urban commuters and pedestrians.

## Core Features
*   **Flash-Evaporation Cooling**: High-pressure (1160 PSI) nozzles create ultra-fine mist for instant cooling without surface wetting.
*   **Predictive AI**: Machine learning algorithms analyze real-time humidity, temperature, and foot-traffic data to optimize system activation.
*   **Resource Efficiency**: Advanced closed-loop filtration allows the use of non-potable or recycled water.
*   **IoT Sensor Network**: Real-time environmental monitoring provides city planners with heat-mapping data.
*   **Energy Optimization**: System activation is purely demand-based, minimizing electricity and water waste.

## Hardware Stack
*   **Processing**: Raspberry Pi (or compatible SBC) for AI/Logic.
*   **Sensors**: DHT22 (Temp/Humidity), Ultrasonic/PIR (Motion), Anemometer (Wind).
*   **Fluid Dynamics**: 1160 PSI High-pressure pump, 5-micron filtration unit, stainless steel/high-pressure nylon tubing.
*   **Automation**: Relay modules for automated power management.

## Project Structure
- `index.html`: Public-facing data collection survey for community feedback.
- `results.html`: Password-protected (`VasudhaGOAT`) admin dashboard with dynamic analytics.
- `assets/`: Folder containing CSS, JS (Chart.js), and project documentation.

## Getting Started
1. **Access Survey**: Open `index.html` in any web browser to view the survey.
2. **Access Data**: Use the admin link at the bottom of the page and enter the password `VasudhaGOAT` to view the analytics dashboard.

## Sustainability Impact
MIST is designed to reduce heat-related exhaustion for daily wage workers and commuters, actively reducing the city's overall carbon footprint through smarter public cooling solutions.

---
*Built for the betterment of urban public spaces.*

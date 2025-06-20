# IOTSmokeAlarm

🔥 Smart Smoke Detector using Micro:bit
📖 Overview
This project is a smart smoke and air quality detection system built using a BBC Micro:bit, designed with an AGILE development approach to allow for fast iteration, bug fixes, and continuous improvements. It provides real-time monitoring of carbon monoxide and smoke levels and alerts the user both locally (via buzzer) and remotely (via website).

🎯 Purpose
Traditional smoke detectors are limited by range—only alerting individuals nearby. This smart smoke detector solves that problem by:

Monitoring air quality in real time.

Sending alerts to the homeowner remotely through a website.

Storing and visualizing historical air quality data.

The system ensures that users, especially those away from home or with hearing difficulties, are immediately informed of potential dangers.

🧠 Project Background
During initial research, ideas such as a smart thermostat and home security system were explored. The decision to develop a smart smoke detector was based on:

The life-saving potential of early and remote warnings.

Real-world relevance, inspired by products like Netatmo and Google Nest smoke alarms.

The opportunity to create a cost-effective and educational alternative using readily available Micro:bit hardware.

🌐 IOT Context
This system is part of the Internet of Things (IoT)—connecting everyday devices to the internet to improve their capabilities. It allows:

Continuous monitoring of environmental data.

Cloud storage of sensor readings.

Real-time user alerts via a website.

👥 Target Audience
The system is designed for:

Working professionals often away from home.

Large households with ambient noise.

Parents with young children.

Elderly individuals or those hard of hearing.

Anyone seeking improved home safety and peace of mind.

🏠 In Ireland, 77% of fire-related deaths occur in homes, and 40% of victims were unaware of the fire. This system helps reduce that risk.

🛠️ Features
Real-time smoke and carbon monoxide detection.

Buzzer alarm when dangerous levels are detected.

Web interface displaying current air quality status.

Cloud data storage (via Firebase) and historical data logging.

Accessible UI following the Seven Principles of Universal Design.

🔧 System Architecture
Hardware
Micro:bit (reads air quality data and triggers alarm).

Air Quality Sensor / Smoke Sensor:

Analog output for continuous detection.

Digital output for binary smoke detection.

Breakout board & breadboard for wiring.

Buzzer for local alerts.

Software
Micro:bit Code:

Interprets sensor values.

Triggers buzzer when thresholds are exceeded.

Sends data over serial to Python.

Python Script:

Receives serial data from Micro:bit.

Uploads data to Firebase in real time.

Website:

Fetches data from Firebase using JavaScript.

Alerts user visually if dangerous gas levels are detected.

Responsive design suitable for all devices.

Accessible and intuitive for all users, including the elderly.

🌍 Design and Accessibility
Follows Universal Design Principles:

Simple layout.

Responsive across devices.

Easy-to-read green and white color scheme, promoting a safe and healthy environment.

Validates form inputs (e.g., correct email format).

Contact page requires a password to submit messages:
➤ Password: password

🔐 Ethical and Social Considerations
Security Risks: As with all IoT devices, there is a risk of hacking. Best practices must be followed to ensure data security.

Over-Reliance: Users must not solely depend on technology; backup safety systems are advised.

Malfunction Liability: Regular maintenance and testing are essential to ensure functionality.

📋 System Requirements
✅ Micro:bit connected to smoke detector.

✅ Data sent to Micro:bit, triggering buzzer when needed.

✅ Micro:bit sends real-time data via Python to Firebase.

✅ Website receives and displays live air quality data.

✅ Alarm alerts appear on the website.

✅ Backlog of air quality data viewable with timestamps.

📈 Similar Products
Netatmo Smart Smoke Alarm

Google Nest Protect

Your project offers a budget-friendly and educational alternative to these commercial devices.

📅 Development Process
This project was developed using the AGILE methodology:

Iterative development enabled rapid prototyping.

Frequent testing allowed quick bug fixes and usability improvements.

Agile allowed constant improvement after each development sprint.

📎 License
This project is developed for educational purposes and complies with school GDPR requirements. No personal identifying information is included in the artefact.


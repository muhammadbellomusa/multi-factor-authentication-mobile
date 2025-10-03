# multi-factor-authentication-mobile
A React Native app that demonstrates secure multi-factor authentication (MFA) using email OTP, SMS verification, and biometrics.
# React Native Multi-Factor Authentication (MFA) App

A React Native mobile app that demonstrates secure multi-factor authentication (MFA) using email OTP, SMS verification, and biometrics. Built as a cybersecurity-focused project to showcase secure login implementation in mobile applications.  

---

## 📑 Table of Contents
- [About the Project](#about-the-project)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [Security Considerations](#security-considerations)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## 📖 About the Project
This project demonstrates the implementation of secure multi-factor authentication (MFA) in a mobile application using React Native.  

It showcases how modern authentication systems can enhance security by requiring more than one verification method, including:  
- Password-based authentication  
- One-Time Passwords (OTPs) via email or SMS  
- Biometric authentication (fingerprint or FaceID)  

This is particularly relevant for cybersecurity, mobile security, and identity access management (IAM) job roles.  

---

## ✨ Features
- 🔑 Secure email & password login  
- 📩 Email and SMS-based OTP verification  
- 👆 Biometric authentication (fingerprint/FaceID)  
- 🔒 Secure token storage with `react-native-keychain`  
- ⏱️ Automatic logout on session expiration  
- 📊 Error handling with minimal information leakage  

---

## 🛠 Tech Stack
- **Frontend (Mobile):** React Native (Expo)  
- **Backend (API/Auth):** Node.js + Express *(or Firebase Authentication if using serverless)*  
- **Database:** MongoDB / Firestore  
- **MFA Services:** Twilio (SMS), Nodemailer (Email), Firebase Phone Auth  
- **Security:** JWT for sessions, bcrypt/argon2 for password hashing  

---

## 🏗 Architecture
```plaintext
User → React Native App → Backend API → MFA (OTP/Biometrics) → Secure Session
```

Example Flow:  
1. User enters email + password → backend validates credentials.  
2. Backend requests OTP (email or SMS) or biometric check.  
3. If MFA passes → JWT token generated and stored securely.  
4. User gains access to protected resources.  

---

## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/muhammadbellomusa/multi-factor-authentication-mobile
cd react-native-mfa-auth
```

### 2. Frontend Setup (React Native)
```bash
cd frontend
npm install
npx expo start
```

### 3. Backend Setup (Node.js)
```bash
cd backend
npm install
npm start
```

> ⚠️ Create a `.env` file in the backend folder to store secrets (JWT keys, Twilio API keys, email credentials, etc.).  

---

## 🚀 Usage
1. Register with email and password.  
2. Login using credentials.  
3. Choose MFA method:  
   - Email OTP  
   - SMS OTP  
   - Biometric (Fingerprint/FaceID)  
4. If MFA succeeds → access granted.  

---

## 🖼 Screenshots


- Login Screen  
- OTP Verification Screen  
- Biometric Prompt  

---

## 🔒 Security Considerations
- Passwords hashed with **bcrypt/argon2** before storage.  
- OTPs expire after **60 seconds** and are single-use only.  
- Tokens stored securely using `SecureStore` / `Keychain`.  
- Rate limiting for OTP requests to prevent brute force.  
- No hardcoded secrets in the code — all secrets stored in `.env`.  

---

## 🚧 Future Improvements
- 🔄 Add Google Authenticator / TOTP support.  
- 🔔 Push notification–based MFA approval.  
- 📊 Admin dashboard for monitoring login attempts.  
- 🌐 Deploy backend with Docker for cloud scalability.  

---

## 📜 License
This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.  

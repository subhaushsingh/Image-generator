# 🧠 AI Image Generator

A full-stack web application that uses the [Clipdrop API](https://clipdrop.co/apis) to generate stunning AI images from text prompts. Users can generate, preview, and download images — and share them with the community. All images are securely stored on **Cloudinary**.

![Community Section](https://github.com/subhaushsingh/Image-generator/blob/master/community.png?raw=true)

---

## 🚀 Features

- ✨ Generate AI images from custom prompts (via Clipdrop API)
- ☁️ Upload & store images using Cloudinary
- 🖼️ View and explore shared posts in the community section
- 💾 Download generated images
- 🔐 .env configuration support for API keys
- 🧩 Modular folder structure for scalability

---

## 🛠️ Tech Stack

### 🔹 Frontend (Vite + React)
- React.js
- Vite
- Tailwind CSS

### 🔹 Backend (Node.js + Express)
- Express.js
- MongoDB (with Mongoose)
- Axios
- dotenv
- Cloudinary

### 🔹 External APIs
- [Clipdrop Text-to-Image API](https://clipdrop.co/apis)
- [Cloudinary API](https://cloudinary.com/)

---

## 📁 Folder Structure
```
├── client/ # React frontend (Vite)
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── constants/
│ │ ├── pages/
│ │ └── utils/
│ ├── index.html
│ ├── package.json
│ └── vite.config.js
│
├── server/ # Express backend
│ ├── routes/
│ ├── models/
│ ├── mongodb/
│ ├── .env
│ ├── index.js
│ └── package.json
│
└── README.md
```
🙌 Acknowledgements
- Clipdrop API
- Cloudinary
- Open Source Icons & Assets

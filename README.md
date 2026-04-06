# 📸 Image Gallery Backend

A simple and efficient backend system for uploading and instantly displaying images in a gallery UI. This project allows users to upload photos, store them on the server, and retrieve them dynamically for real-time display on the frontend.

---

## 🚀 Features

- 📤 Upload images easily  
- ⚡ Instant display in UI after upload  
- 🗂️ Organized image storage  
- 🔗 REST API for frontend integration  
- 🛠️ Scalable backend structure  

---

## 🏗️ Tech Stack

- Backend: Node.js, Express.js  
- Storage: Local storage / Cloud (optional)  
- Middleware: Multer  
- API: RESTful APIs  

---

## 📁 Project Structure

```bash
Image-Gallary-Backend/
│
├── uploads/           # Stored images
├── routes/            # API routes
├── controllers/       # Business logic
├── config/            # Configuration files
├── server.js          # Entry point
└── package.json       # Dependencies
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Jay-Patel-cg/Image-Gallary-Backend.git
cd Image-Gallary-Backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the server
```bash
npm start
```

Server will run at:
```
http://localhost:5000
```

---

## 📡 API Endpoints

### 📤 Upload Image
```
POST /upload
```

**Body:**
- form-data → `image` (file)

---

### 🖼️ Get All Images
```
GET /images
```

Returns all uploaded images.

---

## 🔄 How It Works

1. User uploads an image from frontend  
2. Backend processes it using Multer  
3. Image is stored in `uploads/` folder  
4. API returns image URL  
5. Frontend instantly displays the image  

---

## 🧠 Future Improvements

- ☁️ Cloud storage (AWS S3 / Cloudinary)  
- 🔐 Authentication system  
- 🖼️ Image compression  
- ❤️ Like & comment feature  
- 🧾 Metadata (title, tags)  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request  

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Jay Patel**

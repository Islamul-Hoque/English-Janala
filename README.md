# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA

**English Janala** is a modern and interactive English Learning Web Application.  
It brings everything in one place — from learning Vocabulary, listening to Pronunciation, exploring Synonyms, to checking Example Sentences. 🚀  
From beginner to advanced levels, learners can follow lesson-based vocabulary modules, along with an instant search feature to find any word within seconds.  

---

## 🚀 Live Demo  
🔗 [English Janala Live](https://islamul-hoque.github.io/English-Janala/)  

---

## ✨ Features  
- 📚 **Lesson System** → Learn vocabulary step by step with structured lessons.  
- 🔍 **Search Vocabulary** → Instantly find words using the search box.  
- 🔊 **Pronunciation** → Listen to word pronunciation using Voice API.  
- 📝 **Word Details Modal** → Get word meaning, example sentences, and synonyms in detail.  
- ⏳ **Loading Spinner** → Beautiful spinner animation while loading data.  
- ❓ **FAQ Section** → Commonly asked questions answered.  
- 📱 **Responsive UI** → Fully responsive on mobile, tablet, and desktop.  

---

## 🛠️ Tech Stack  
- **HTML5** – Markup and structure  
- **CSS3** – Tailwind CSS + DaisyUI for modern styling  
- **JavaScript (Vanilla JS)** – DOM manipulation & app logic  
- **Font Awesome** – For icons  
- **Google Fonts** – Poppins & Hind Siliguri  
- **Open API (programming-hero.com)** – For lessons & words data  

---

## ⚙️ How It Works  
1. **Lessons Load** → All lesson numbers are fetched from API.  
2. **Select Lesson** → Clicking a lesson shows vocabulary cards for that level.  
3. **Word Details** → Clicking on a card opens a modal with details.  
4. **Pronunciation** → A speaker button lets users listen to the word.  
5. **Search** → Instantly search and display matching words.  

---

## ⚡ API Endpoints

1. Get ⚡ All Levels

```bash
https://openapi.programming-hero.com/api/levels/all
```

2. Get ⚡ Words by Levels <br/>
   https:// openapi.programming-hero.com/api/level/{id}

```bash
https://openapi.programming-hero.com/api/level/5
```

3. Get ⚡ Words Detail <br/>
   https:// openapi.programming-hero.com/api/word/{id}

```bash
https://openapi.programming-hero.com/api/word/5
```

4. Get ⚡ All Words <br/>

```bash
https://openapi.programming-hero.com/api/words/all
```
---


## 📂 Project Structure
```plaintext
ENGLISH JANALA/
├── assets/              # All asset images, icons, and logos
├── script/              # JavaScript files
│   └── script.js      
├── style/               # CSS files
│   └── style.css      
├── index.html           # Main HTML file
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration

```

---
## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
## 📜 License
This project is licensed under the MIT License.
# 📘 Sentence Completion Quiz

**Sentence Completion Quiz** ek React-based web application hai jisme users ko incomplete sentences ko sahi shabdon ke saath poora karna hota hai. Har question ke liye timer hota hai, aur quiz user ke answers ko track karta hai. Last mein result summary bhi dikhai jaati hai.

---

## ✨ Features

- **Multiple Questions**: Har question mein ek ya zyada blanks hote hain.
- **Word Selection**: Options list se sahi shabd chunna hota hai.
- **Timer**: Har question ke liye 30 seconds ka timer hota hai.
- **Navigation**: Question complete hone par automatic ya manual next question.
- **Results Tracking**: Har answer track hota hai, aur end mein detailed result summary milti hai.
- **Quit Option**: Quiz chhodne par bhi progress save ho jaata hai.

---

## 🛠 Technologies Used

- **React** – UI development ke liye
- **CSS** – Styling ke liye
- **JavaScript** – Functionality ke liye

---

## ⚙️ Setup Instructions

### 📌 Prerequisites

- Node.js (version 14 ya usse upar)
- npm (Node ke saath aata hai)

### 🧪 Installation

```bash
git clone https://github.com/your-username/sentence-completion-quiz.git
cd sentence-completion-quiz
npm install
npm start
```
## 🚀 How It Works

- **Sentence Display**: Har question ek sentence ke roop mein aata hai jisme blanks (`___`) hote hain.
- **Word Selection**: User ko diye gaye options me se sahi words chunn kar blanks fill karne hote hain.
- **Timer Functionality**: Har question ke liye 30-second timer set hota hai. Time khatam hone par agla question automatically shuru ho jaata hai.
- **Answer Feedback**: Har question complete hone ke baad correct ya incorrect jawab turant dikhai jaate hain.
- **Final Summary**: Quiz ke ant mein user ko complete result summary milti hai jisme har question ka analysis hota hai.

## 🗂 Data Structure

Quiz ke questions ka structure kuch is tarah hota hai:

```json
[
  {
    "id": 1,
    "sentence": "The ___ jumped over the ___.",
    "blanks": 2,
    "options": ["dog", "moon", "cow", "fence"],
    "answers": ["cow", "moon"]
  },
  {
    "id": 2,
    "sentence": "She ___ the ball and it ___ over the net.",
    "blanks": 2,
    "options": ["hit", "went", "missed", "jumped"],
    "answers": ["hit", "went"]
  }
]
```
## 🖼 Image
<h3>Homepage</h3>

![Screenshot (100)](https://github.com/user-attachments/assets/352f5934-2043-4985-89b0-c6a51226963d)

<h3>Quiz Question</h3>

![Screenshot (101)](https://github.com/user-attachments/assets/0a6fbc28-0b2d-4c46-940f-66676e846d7f)

<h3>ScoreCard</h3>

![Screenshot (102)](https://github.com/user-attachments/assets/858d1962-5ec6-4044-b1ae-fc587bd682e7)


## 📬 Contact

- 📧 **Email**: [bittukumarprajapati200@gmail.com](mailto:bittukumarprajapati2003@gmail.com)  
- 💻 **GitHub**: [github.com/Bittu Kumar](https://github.com/Bittu-kumar2003)  
- 🔗 **LinkedIn**: [linkedin.com/Bittu Kumar](https://www.linkedin.com/in/bittu-kumar-812368246/)



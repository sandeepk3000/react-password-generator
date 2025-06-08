# 🔐 React Password Generator

A sleek, responsive, and customizable password generator built using **React** and **Tailwind CSS**. Allows users to generate strong passwords with options to include numbers, special characters, and control the password length. Includes one-click clipboard copy functionality.

---

## 🌟 Features

* ✅ Secure random password generation
* 🔢 Adjustable password length (6 to 100 characters)
* 🔣 Option to include:

  * Numbers (0–9)
  * Special characters (!@#\$%^&\*)
* 📋 Copy password to clipboard with one click
* ⚛️ Modern React hooks (`useState`, `useRef`, `useCallback`, `useEffect`)
* 🎨 Clean and responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

* **React** (Functional components with hooks)
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 📁 Project Structure

```
src/
├── App.css                   # Global styles
├── App.js                    # Main App component
├── index.js                  # React entry point
└── components/
    └── PasswordGenerator.jsx # Password generator component
```

---

## 🚀 Getting Started

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/password-generator.git
cd password-generator
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the development server

```bash
npm start
```

Open your browser at `http://localhost:3000` to view the app.

---

## 💡 How It Works

1. The character set is dynamically built depending on user selections.
2. Characters are randomly picked using `Math.random()` and added to the password.
3. The password is stored in the React state and displayed in a read-only input box.
4. Clicking the "Copy" button copies the password to the clipboard using the browser’s Clipboard API.

---

## 🔍 Example Logic Snippet

```js
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if (numberAllowed) str += "0123456789";
if (charAllowed) str += "!@#$%^&*()_+{}[]|:;<>,.?/~`";

let pass = "";
for (let i = 1; i <= length; i++) {
  const charIndex = Math.floor(Math.random() * str.length);
  pass += str.charAt(charIndex);
}
setPassword(pass);
```

---

## 🧠 Hooks Used

| Hook          | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `useState`    | Manage states for password, checkboxes, and length  |
| `useRef`      | Reference to password input for clipboard selection |
| `useCallback` | Optimize copy and generate functions                |
| `useEffect`   | Automatically regenerate password on changes        |

---

## 📸 UI Preview

> *(Insert a screenshot or demo GIF here for better presentation)*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Free to use, modify, and distribute for personal or commercial use.

---

## 🙌 Contributions

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or suggest improvements.

---

**Made with ❤️ in React**



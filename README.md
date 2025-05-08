# Age Calculator

A simple web-based Age Calculator that calculates your exact age in years, months, and days. Built using **HTML**, **CSS**, and **JavaScript**.

---

## 📂 Project Structure

```
├── index.html       # Main HTML file (structure)
├── style.css        # CSS file (styling)
└── main.js          # JavaScript file (logic)
```

---

## 🚀 How It Works

### 1. index.html (Structure)

* **Purpose:** Builds the layout of the page.
* Includes:

  * A heading (`Age Calculator`)
  * Date input field
  * Submit button
  * Paragraph to display the result
* Links to `style.css` for styling and `main.js` for logic.

```html
<div class="box">
  <h1>Age Calculator</h1>
  <label for="date">Select your (Date of Birth)</label>
  <input type="date" id="date" required>
  <input type="submit" value="Okay" id="calculateBtn">
  <p id="result"></p>
</div>
```

### 2. style.css (Styling)

* **Purpose:** Makes the app visually appealing.
* Key Features:

  * Centers the main box on the page.
  * Uses a pink background (`#E91E63`) with rounded corners and shadows.
  * Styles the date picker and button with responsive, modern looks.

Example CSS Snippet:

```css
.box {
  width: 90%;
  max-width: 600px;
  background-color: #E91E63;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10% auto;
  padding: 20px;
  box-shadow: 5px 5px 10px #aaa;
}
```

### 3. main.js (Logic)

* **Purpose:** Calculates the user's age when the button is clicked.
* Key Steps:

  * Grabs user input (`date of birth`).
  * Ensures future dates can’t be selected.
  * Calculates the difference between today and selected date.
  * Displays age in **years**, **months**, and **days**.

Main Calculation Logic:

```javascript
let year = y2 - y1;
if (m2 >= m1) { month = m2 - m1; } else { year--; month = 12 + m2 - m1; }
if (d2 >= d1) { date = d2 - d1; } else { month--; date = daysInMonth(y1, m1) + d2 - d1; }
```

### 📊 Why the Function is Used

* The calculator's `getAge()` function is essential to break down the difference between today's date and the user's birthdate into **years**, **months**, and **days**.
* It handles tricky cases like months and days rolling over (e.g., if your birthday hasn't occurred yet this year).
* It uses JavaScript's built-in `Date` object for accurate calculations.

---

## ✅ Features

* Accurate age calculation in years, months, and days.
* Prevents users from selecting a future date.
* Clean and responsive design.

---

## 🏅 Best Practices for Writing JavaScript

* ✅ **Use `const` and `let`:** Avoid using `var`; use `const` for variables that don't change and `let` for ones that do.
* ✅ **Separate concerns:** Keep HTML, CSS, and JS in separate files.
* ✅ **Use meaningful function and variable names:** Like `calculateAge`, `birthDate`, etc.
* ✅ **Avoid inline JavaScript:** Always write JS in separate `.js` files.
* ✅ **Use event listeners instead of `onclick` attributes:** Like `btn.addEventListener("click", calculateAge)`.
* ✅ **Handle edge cases:** Like preventing future dates or invalid input.
* ✅ **Comment your code:** So others (and future-you) can understand it.

---

## 💎 Best Approach to Build Any HTML, CSS, JS Project

1. **Plan first:** Know what you're building. Draw a simple wireframe.
2. **Structure (HTML):** Build the skeleton layout first using semantic HTML.
3. **Style (CSS):** Style your structure. Start with mobile-first responsive design.
4. **Functionality (JS):** Add logic and interactivity after the structure and styling.
5. **Test:** Try edge cases (e.g., invalid inputs).
6. **Optimize:** Make the code clean, DRY (Don't Repeat Yourself), and performant.
7. **Enhance:** Add features like animations, responsive design, or accessibility.

---

## 🌱 Future Enhancements

* Make the app mobile-responsive.
* Add animations when showing results.
* Option to copy or download the result.

---

## 📚 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---


## PREVIEW
![image](https://github.com/user-attachments/assets/ed1e9e85-64ca-4c70-a879-09e0996f2ec7)

## 👨‍💻 Author

**Coders Hub Project**

---

Feel free to fork, improve, and use this project for learning purposes! 🚀

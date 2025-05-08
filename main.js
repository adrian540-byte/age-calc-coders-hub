// Get references to the input field, button, and result paragraph
let userInput = document.getElementById("date");
let btn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

// Set the maximum date to today's date to prevent future dates
userInput.max = new Date().toISOString().split("T")[0];

// Add event listener to the button
btn.addEventListener("click", calculateAge);

function calculateAge() {
  // Check if the user has selected a date
  if (userInput.value === "") {
    alert("Please select a date.");
    userInput.focus();
  } else {
    getAge();
  }
}

function getAge() {
  // Get the selected birth date
  let birthDate = new Date(userInput.value);

  // Extract day, month, and year from birth date
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();
  let y1 = birthDate.getFullYear();

  // Get the current date
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  // Calculate the difference in years
  let year = y2 - y1;
  let month, date;

  // Adjust months calculation
  if (m2 >= m1) {
    month = m2 - m1;
  } else {
    year--;
    month = 12 + m2 - m1;
  }

  // Adjust days calculation
  if (d2 >= d1) {
    date = d2 - d1;
  } else {
    month--;
    date = daysInMonth(y1, m1) + d2 - d1;
  }

  // Handle negative month values
  if (month < 0) {
    month = 11;
    year--;
  }

  // Function to get the number of days in a given month
  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Display the calculated age
  result.innerHTML = `You are ${year} years, ${month} months, and ${date} days old.`;
}

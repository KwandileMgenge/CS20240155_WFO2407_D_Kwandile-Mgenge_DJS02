const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validate input presence
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }

    // Handle division by zero
    if (parseFloat(divider) === 0) {
      console.error("Division by zero error");
      result.innerText = "Division not performed. Invalid number provided. Try again";
      return;
    }

    // Validate input type
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Non-numeric input provided.");
    }

    result.innerText = Math.floor(dividend / divider); // Rounds down the result

  } catch (error) {
    // Critical error handling: replace screen content
    console.error(error);
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
  }
  
});
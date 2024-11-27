document.getElementById("submitBtn").addEventListener("click", function () {
  const selectedParameters = document.querySelectorAll(".parameter:checked");
  const isSatisfied = selectedParameters.length >= 5;

  // Remove any existing result
  const oldResult = document.querySelector(".result");
  if (oldResult) oldResult.remove();

  // Create a new result element
  const result = document.createElement("div");
  result.classList.add("result");
  if (isSatisfied) {
    result.textContent = "Satisfied";
    result.classList.add("satisfied");
  } else {
    result.textContent = "Dissatisfied";
    result.classList.add("dissatisfied");
  }

  document.body.appendChild(result);
});

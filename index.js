function showAntwort() {
  const antwortElement = document.getElementById("answer");
  const toggleButton = document.getElementById("toggleButton");

  if (antwortElement.classList.contains("hide_answer")) {
    antwortElement.classList.remove("hide_answer");
    toggleButton.textContent = "Hide answer";
  } else {
    antwortElement.classList.add("hide_answer");
    toggleButton.textContent = "Show answer";
  }
}

function showAntwort1() {
  const antwortElement = document.getElementById("answer1");
  const toggleButton1 = document.getElementById("toggleButton1");

  if (antwortElement.classList.contains("hide_answer")) {
    antwortElement.classList.remove("hide_answer");
    toggleButton1.textContent = "Hide answer";
  } else {
    antwortElement.classList.add("hide_answer");
    toggleButton1.textContent = "Show answer";
  }
}

function showAntwort2() {
  const antwortElement = document.getElementById("answer2");
  const toggleButton = document.getElementById("toggleButton");

  if (antwortElement.classList.contains("hide_answer")) {
    antwortElement.classList.remove("hide_answer");
    toggleButton2.textContent = "Hide answer";
  } else {
    antwortElement.classList.add("hide_answer");
    toggleButton2.textContent = "Show answer";
  }
}

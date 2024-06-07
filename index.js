document.addEventListener("DOMContentLoaded", () => {
  let systemGeneratedNo = Math.floor(Math.random() * 11);
  console.log("System generated number:", systemGeneratedNo);
  const form = document.getElementById("guessForm");
  const resultDiv = document.getElementById("result");
  const guessesDiv = document.getElementById("guesses");
  const retryButton = document.getElementById("retryButton");
  let guessCount = 0;
  const maxGuesses = 3;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userGuessInput = document.getElementById("userGuess");
    const userGuess = parseInt(userGuessInput.value);
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
      resultDiv.textContent = "Masukkan angka antara 0 dan 10.";
      resultDiv.style.color = "red";
      userGuessInput.value = "";
      return;
    }
    guessCount++;
    guessesDiv.textContent = `Jumlah tebakan: ${guessCount}`;
    if (userGuess === systemGeneratedNo) {
      resultDiv.textContent = "Yeaahh! Jawaban Anda Benar. Anda Menang!";
      resultDiv.style.color = "green";
      form.style.display = "none";
      retryButton.style.display = "block";
    } else if (guessCount >= maxGuesses) {
      resultDiv.textContent = `Anda telah kehabisan kesempatan. Angka yang benar adalah ${systemGeneratedNo}.`;
      resultDiv.style.color = "red";
      form.style.display = "none";
      retryButton.style.display = "block";
    } else if (userGuess < systemGeneratedNo) {
      resultDiv.textContent = "Tebakan Anda terlalu rendah. Coba lagi!";
      resultDiv.style.color = "orange";
    } else {
      resultDiv.textContent = "Tebakan Anda terlalu tinggi. Coba lagi!";
      resultDiv.style.color = "orange";
    }
    userGuessInput.value = "";
  });
  retryButton.addEventListener("click", () => {
    systemGeneratedNo = Math.floor(Math.random() * 11);
    console.log("System generated number:", systemGeneratedNo);
    guessCount = 0;
    guessesDiv.textContent = `Jumlah tebakan: ${guessCount}`;
    resultDiv.textContent = "";
    form.style.display = "block";
    retryButton.style.display = "none";
  });
});

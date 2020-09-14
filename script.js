const vowelInput = document.getElementById("vowel-input");
const vowelRes = document.getElementById("vowel-result");
const vowelBtn = document.getElementById("vowel-btn");

const palInput = document.getElementById("palindrome-input");
const palRes = document.getElementById("palindrome-result");
const palBtn = document.getElementById("palindrome-btn");

const wordInput = document.getElementById("wordcount-input");
const wordRes = document.getElementById("wordcount-result");
const wordBtn = document.getElementById("wordcount-btn");

function updateVowel() {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;
  let vowelArray = Array.from(vowelInput.value.toLowerCase());
  vowelArray = vowelArray.filter((e) => String(e).trim());

  for (let i = 0; i < vowelArray.length; i++) {
    for (let y = 0; y < vowels.length; y++) {
      if (vowelArray[i] === vowels[y]) {
        vowelCounter++;
      } else {
        continue;
      }
    }
  }
  vowelRes.textContent = `Total vowels: ${vowelCounter}`;
}

function checkPalindrome() {
  let regString = palInput.value.toLowerCase();
  let palString = regString.split("").reverse().join("");

  if (regString === palString) {
    palRes.textContent = `Is a palindrome`;
  } else {
    palRes.textContent = `Is not a palindrome`;
  }
}

function countWords() {
  let wordCounter = 0;
  let wordArray = Array.from(
    wordInput.value
      .toLowerCase()
      .replace(/(\r\n|\n|\r)/gm, " ")
      .split(" ")
  );
  wordArray = wordArray.filter((e) => String(e).trim());
  wordArray.forEach((element) => wordCounter++);
  console.log(wordCounter);
}

vowelBtn.addEventListener("click", updateVowel);
palBtn.addEventListener("click", checkPalindrome);
wordBtn.addEventListener("click", countWords);

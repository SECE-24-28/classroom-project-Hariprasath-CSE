const questions = [
  {
    text: "Which team won most matches in ipl history?",
    options: ["MI", "CSK", "RCB", "KKR"],
    correctIndex: 0
  },
  {
    text: "Which iconic player holds the record for the highest individual score in a single IPL innings?",
    options: ["Rohit", "Kohli", "Gayle", "Raina"],
    correctIndex: 2
  },
  {
    text: "Who won the ipl final 2017?",
    options: ["RCB", "RPS", "MI", "GL"],
    correctIndex: 2
  }
];

let i = 0;
let selectedIndex = null;

const qText = document.getElementById("questionText");
const qNumber = document.getElementById("qNumber");
const qTotal = document.getElementById("qTotal");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

qTotal.textContent = questions.length;

function loadQ() {
  selectedIndex = null;
  nextBtn.disabled = true;
  nextBtn.classList.add("opacity-50");

  const q = questions[i];
  qText.textContent = q.text;
  qNumber.textContent = i + 1;

  optionsDiv.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full bg-slate-700 hover:bg-[#4d6a8e] px-4 py-2 rounded-lg text-left text-white mb-2";
    btn.textContent = opt;

    btn.onclick = () => {
      // Remove highlight from previously selected option
      const allBtns = optionsDiv.querySelectorAll("button");
      allBtns.forEach(b => b.classList.remove("bg-green-600", "bg-red-600"));

      // Update selected index
      selectedIndex = idx;

      // Highlight current selection (green if correct, red if wrong)
      if (idx === q.correctIndex) {
        btn.classList.add("bg-green-600");
      } else {
        btn.classList.add("bg-red-600");
      }

      // Enable next button
      nextBtn.disabled = false;
      nextBtn.classList.remove("opacity-50");
    };

    optionsDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (selectedIndex === null) return;

  i++;
  if (i < questions.length) {
    loadQ();
  } else {
    qText.textContent = "Quiz Completed!";
    optionsDiv.innerHTML = "";
    nextBtn.classList.add("hidden");
  }
};

loadQ();

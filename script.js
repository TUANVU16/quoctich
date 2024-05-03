const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

//let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  setNextQuestion();
});

function playsound() {
  let a = currentQuestionIndex + 1;
  let beat = new Audio(`coyen/${a}.mp3`);
  beat.play();
}

function playanswer() {
  let b = currentQuestionIndex + 1;
  let beat = new Audio(`answer/${b}.mp3`);
  beat.play();
}

function startGame() {
  startButton.classList.add("hide");
  //shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  playsound();
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  playsound();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  playanswer();
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answers: [{ text: "We the People", correct: true }],
  },
  {
    question: "What do we call the first ten amendments to the Constitution? ",
    answers: [{ text: " the Bill of Rights", correct: true }],
  },
  {
    question:
      "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answers: [{ text: "to print money", correct: true }],
  },
  {
    question:
      "Under our Constitution, some powers belong to the states. What is one power of the states? ",
    answers: [{ text: "give a driver’s license", correct: true }],
  },
  ////
  {
    question: "What does the Constitution do?",
    answers: [{ text: "sets up the government", correct: true }],
  },
  {
    question:
      "There are four amendments to the Constitution about who can vote. Describe one of them. ",
    answers: [
      {
        text: "Any citizen can vote. (Women and men can vote.)",
        correct: true,
      },
    ],
  },
  //7
  {
    question: "How many amendments does the Constitution have? ",
    answers: [{ text: "twenty-seven (27)", correct: true }],
  },
  //8
  {
    question: "When was the Constitution written? ",
    answers: [{ text: "1787", correct: true }],
  },
  //9
  {
    question:
      "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers. ",
    answers: [{ text: "(John) Jay", correct: true }],
  },
  //10
  {
    question: "What happened at the Constitutional Convention? ",
    answers: [{ text: "The Constitution was written.", correct: true }],
  },
  //11
  {
    question: "What is one right or freedom from the First Amendment? ",
    answers: [{ text: "speech", correct: true }],
  },
  //12
  {
    question: "What is an amendment? ",
    answers: [{ text: "a change (to the Constitution)", correct: true }],
  },
];

const container = document.getElementById("container");

const flaps = document.getElementsByClassName("flap");

container.addEventListener("click", () => {
  for (const flap of flaps) {
    flap.classList.add("open");
  }

  setTimeout(() => {
    for (const flap of flaps) {
      flap.style.zIndex = "auto";
    }
  });
});

const letter = document.getElementById("letter");

letter.addEventListener("click", () => {
  letter.classList.add("pull");
  setTimeout(() => {
    letter.style.zIndex = 999;
  }, 1000);
});

const noButton = document.getElementById("no");

noButton.addEventListener("click", () => {
  const randomX = Math.floor(
    Math.random() * (letter.clientWidth - noButton.clientWidth)
  );
  const randomY = Math.floor(
    Math.random() * (letter.clientHeight - noButton.clientHeight)
  );

  noButton.classList.add("no");

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

const yesButton = document.getElementById("yes");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

yesButton.addEventListener("click", () => {
  question.hidden = true;
  answer.classList.remove("hide");
  answer.classList.add("show");

  rainHearts();
});

const HEART_INTERVAL = 250;
const HEART_LIFETIME = 5000;
const MIN_FONT_SIZE = 20;
const MAX_FONT_SIZE = 50;
const MIN_ANIM_DURATION = 2;
const MAX_ANIM_DURATION = 5;

const heartSymbols = ["❤️", "💖", "💜"];

const rainHearts = () => {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML =
      heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const fontSize =
      Math.random() * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE;
    const animationDuration =
      Math.random() * (MAX_ANIM_DURATION - MIN_ANIM_DURATION) +
      MIN_ANIM_DURATION;

    Object.assign(heart.style, {
      left: Math.random() * 100 + "vw",
      fontSize: fontSize + "px",
      animationDuration: animationDuration + "s",
    });

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), HEART_LIFETIME);
  }, HEART_INTERVAL);
};

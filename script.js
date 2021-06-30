const fin = document.getElementById("fin");
const objects = document.getElementById("objects");
const score = document.getElementById("score");

function jump() {
  fin.classList.add("jump-animation");
  setTimeout(() =>
    fin.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!fin.classList.contains('jump-animation')) {
    jump();
  }
})

document.addEventListener('click', (event) => {
  if (!fin.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const finTop = parseInt(window.getComputedStyle(fin)
    .getPropertyValue('top'));
  const objectsLeft = parseInt(window.getComputedStyle(objects)
    .getPropertyValue('left'));
  score.innerText++;

  if (objectsLeft < 0) {
    objects.style.display = 'none';
  } else {
    objects.style.display = ''
  }

  if (objectsLeft < 50 && objectsLeft > 0 && finTop > 150) {
    alert("GAME OVER.\nSCORE : " + score.innerText +
      "\nCLICK 'SPACE' OR 'OK' to Play again");
    location.reload();
  }
}, 50);


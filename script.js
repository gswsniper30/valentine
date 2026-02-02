const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsBox = document.getElementById("buttonsBox");
const card = document.getElementById("card");

function moveNoButton() {
  const maxX = buttonsBox.clientWidth - noBtn.clientWidth;
  const maxY = buttonsBox.clientHeight - noBtn.clientHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randX + "px";
  noBtn.style.top = randY + "px";
}

// hover就跑
noBtn.addEventListener("mouseenter", moveNoButton);

// 鼠标靠近就跑（更难点到）
buttonsBox.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const mx = e.clientX;
  const my = e.clientY;

  const close =
    mx > rect.left - 40 &&
    mx < rect.right + 40 &&
    my > rect.top - 40 &&
    my < rect.bottom + 40;

  if (close) moveNoButton();
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h2 class="question">YAYYYY 💖💖💖</h2>
    <img class="bear" src="https://media.tenor.com/dF7yP0y8iSAAAAAi/peach-goma.gif" />
    <p style="font-size:22px; margin-top:10px;">I knew it 😭🥰</p>
  `;
});

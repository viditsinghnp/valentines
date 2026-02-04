const app = document.getElementById("app");

/* Page 2 */
function start() {
  app.innerHTML = `
    <h1>So...</h1>
    <p>Will you be my Valentine? 💌</p>
    <span class="dare">(I dare you to press NO 😏)</span>

    <div class="buttons">
      <button onclick="yes()">Yes 💖</button>
      <button id="no" onmouseover="moveNo()" onclick="moveNo()">NO 🙈</button>
    </div>
  `;
}

/* Original runaway NO button (simple & stable) */
function moveNo() {
  const btn = document.getElementById("no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

/* Page 3 */
function yes() {
  heartBurst(); // 💗 burst first

  app.innerHTML = `
    <div class="final">
      <h1>YAYYY!! I LOVE YOU ❤️</h1>
      <img src="us.jpg" alt="Us together">
      <audio id="loveSong" src="adore-you-chorus.mp3"></audio>
    </div>
  `;

  startHearts();
  playMusic();
}
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💓";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 350);
}
function playMusic() {
  const audio = document.getElementById("loveSong");
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.8) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}



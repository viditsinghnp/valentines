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
  app.innerHTML = `
    <h1>YAYYY!! I LOVE YOU ❤️</h1>
  `;
}

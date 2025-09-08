import { generateOutput } from "./controller.js";

export function renderAll() {
  const magicball = document.getElementById("magicball")
  const overlay = document.getElementById("overlay");
  const forklaring = document.getElementById("forklaring");

  forklaring.innerHTML = `
    <h1>Velkommen til den magiske ballen.</h1>
    <div>Klikk på den magiske ballen så får du råd</div>
  `;

  function renderOutput() {
    overlay.textContent = generateOutput();
  }

  magicball.addEventListener("click", renderOutput);
}

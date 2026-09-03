import { invoke } from "@tauri-apps/api/core";
import Database from "@tauri-apps/plugin-sql";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  // The path is resolved relative to the app's config directory.
  const db = await Database.load("sqlite:test.db");

  // Use the "$#" syntax when substituting query data.
  await db.execute(
    "INSERT into todos (id, title, status) VALUES ($1, $2, $3)",
    [1, "Try the sql plugin", "open"],
  );
});

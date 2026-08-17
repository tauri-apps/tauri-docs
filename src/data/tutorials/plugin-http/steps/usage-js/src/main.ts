import { invoke } from "@tauri-apps/api/core";
import { fetch } from "@tauri-apps/plugin-http";

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

  // Send a GET request
  const response = await fetch("https://test.tauri.app/data.json", {
    method: "GET",
  });
  console.log(response.status); // e.g. 200
  console.log(response.statusText); // e.g. "OK"
});

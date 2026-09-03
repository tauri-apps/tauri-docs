import { invoke } from "@tauri-apps/api/core";
import { load } from "@tauri-apps/plugin-store";

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

  // Create a new store or load the existing one; the options are ignored if
  // a `Store` with that path has already been created
  const store = await load("store.json", { autoSave: false });

  // Set a value.
  await store.set("some-key", { value: 5 });

  // Get a value.
  const val = await store.get<{ value: number }>("some-key");
  console.log(val); // { value: 5 }

  // You can manually save the store after making changes;
  // otherwise it saves upon graceful exit.
  await store.save();
});

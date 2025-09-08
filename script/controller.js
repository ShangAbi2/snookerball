import { ballAdvice } from "./model.js";

let last = -1;

export function generateOutput() {
  if (ballAdvice.length === 0) return "";
  let idx;
  do {
    idx = Math.floor(Math.random() * ballAdvice.length);
  } while (ballAdvice.length > 1 && idx === last); 
  last = idx;
  return ballAdvice[idx];
}

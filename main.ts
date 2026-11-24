// Alien Field Notes: The Two Day Earth Review
// Entry for make.fun u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.
// Writes one original line (<= 200 characters): a review of planet Earth
// left by an alien tourist. Node 22, standard library only. Deterministic:
// the same constant text on every run, no clock, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Earth: the locals keep small wolves indoors, carry little bags for their droppings, and still call themselves the owners. Five stars — the wolves clearly run the place.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);

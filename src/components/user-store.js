import { writable } from "svelte/store";

export const user = writable({
  id: 1,
  name: "frank",
  role: "operator",
  permissions: ["getSpecifications"],
});

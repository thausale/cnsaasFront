import { writable, get } from "svelte/store";

function userState(initialState) {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    update,
    checkPermissions: () => {
      const user = get(userStore);
      return user ? user.permissions : [];
    },
    getInfo: () => get(userStore),
  };
}

export const userStore = userState({});

// export const userStore = userState({
//   id: 1,
//   name: "frank",
//   role: "operator",
//   permissions: ["getSpecifications"],
// });

import store from "store";

function getLocalStorage(name, value) {
  return store.get(name, value);
}

function removeLocalStorage(name) {
  return store.remove(name);
}

function setLocalStorage(name, value) {
  return store.set(name, value);
}

export default { getLocalStorage, setLocalStorage, removeLocalStorage };

export function setItem(obj) {
  localStorage.setItem(obj.key, JSON.stringify(obj.value));
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export const storage = {
  setItem: (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  removeItem: (key) => {
    return localStorage.removeItem(key);
  }
}
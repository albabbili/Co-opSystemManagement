// js/data.js
// Utility for simplified localStorage management (temporary until backend is implemented)

export const Storage = {
  // Get parsed data from localStorage, return fallback if not found or invalid
  get(key, fallback = []) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (e) {
      console.error(`Error retrieving "${key}":`, e);
      return fallback;
    }
  },

  // Save data to localStorage as a JSON string
  set(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving "${key}":`, e);
    }
  },

  // Add a new item to an array stored in localStorage
  addToArray(key, item) {
    const current = Storage.get(key);
    current.push(item);
    Storage.set(key, current);
  },

  // Update an item in a stored array by condition (predicate)
  updateArrayItem(key, predicateFn, updatedItem) {
    const current = Storage.get(key);
    const index = current.findIndex(predicateFn);
    if (index !== -1) {
      current[index] = updatedItem;
      Storage.set(key, current);
    }
  },

  // Remove items from a stored array that match a given condition
  removeFromArray(key, predicateFn) {
    const current = Storage.get(key);
    const filtered = current.filter(item => !predicateFn(item));
    Storage.set(key, filtered);
  },

  // Remove a key entirely from localStorage
  clear(key) {
    localStorage.removeItem(key);
  }
};
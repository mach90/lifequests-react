import { useState, useEffect } from "react";

/* //////////////////////////////////////////////////
CUSTOM HOOK TO MANAGE LOCAL STORAGE
////////////////////////////////////////////////// */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    /* Retrieve the value from local storage using the provided key */
    const storedValue = localStorage.getItem(key);

    /* If a value is found in local storage, parse it from JSON and returns it
    Otherwise, returns the initialState */
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      /* Store the current value in local storage using the provided key
      The value is stringified to JSON format before being stored */
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  /* Returns current value and the function to update it */
  return [value, setValue];
}
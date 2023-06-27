import { useState } from 'react';

type StorageValue<T> = T | undefined;

function useLocalStorage<T>(key: string, initialValue?: T): [StorageValue<T>, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<StorageValue<T>>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error retrieving value from localStorage for key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting value to localStorage for key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

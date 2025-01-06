export const debounce = <T extends (...args: any[]) => void>(callback: T, delay: number = 50) => {
    let debounceTimeout: NodeJS.Timeout | null = null;
  
    return function (...args: Parameters<T>) {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      debounceTimeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  
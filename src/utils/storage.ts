// Safe localStorage wrapper to prevent crashes in sandboxed iframes or browsers with blocked third-party storage
export function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`[Storage] Failed to read ${key} from localStorage:`, error);
    return null;
  }
}

export function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`[Storage] Failed to write ${key} to localStorage:`, error);
  }
}

export function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`[Storage] Failed to remove ${key} from localStorage:`, error);
  }
}

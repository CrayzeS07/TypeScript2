type ValueType = string | number | boolean;

class LocalStorageHandler {
  static set(key: string, value: ValueType): void {
    try {
      if (
        typeof value !== "string" &&
        typeof value !== "number" &&
        typeof value !== "boolean"
      ) {
        throw new Error("NT");
      }
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static get(key: string): ValueType | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return null;
      return JSON.parse(serializedValue) as ValueType;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  static remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

LocalStorageHandler.set("String", "Hello, world!");
LocalStorageHandler.set("Number", 5456);
LocalStorageHandler.set("Boolean", true);

const string = LocalStorageHandler.get("String");
const number = LocalStorageHandler.get("Number");
const boolean = LocalStorageHandler.get("Boolean");

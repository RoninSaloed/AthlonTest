export const setItemToStorage = (key: string, value: string | number): void => {
  if (localStorage === undefined) return

  localStorage.setItem(key, value.toString())
}

export function getItemFromStorage<T = string>(key: string): T | null {
  if (localStorage === undefined) return null

  const item = localStorage.getItem(key)

  return item as T | null
}

export const removeItemFromStorage = (key: string): void => {
  if (localStorage === undefined) return

  localStorage.removeItem(key)
}

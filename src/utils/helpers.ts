export const setAccessToken = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getAccessToken = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const removeAccessToken = (key: string) => {
  localStorage.removeItem(key);
};

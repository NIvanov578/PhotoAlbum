const getData = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
const setData = (key, value) =>
  localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value)
  );

export { getData, setData };

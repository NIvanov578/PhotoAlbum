const groupBy = (arr, key) => {
  return arr.reduce((acc, currentValue) => {
    const val = currentValue[key];
    acc[val] ? acc[val].push(currentValue) : (acc[val] = []);

    return acc;
  }, {});
};

export { groupBy };

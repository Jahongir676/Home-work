const arrayToObject = (array) => {
  return array.reduce((obj, item) => {
    if (Array.isArray(item) && item.length === 2) {
      const [key, value] = item;
      obj[key] = value;
    }
    return obj;
  }, {});
};
module.exports = {arrayToObject};

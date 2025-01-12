
function objectToArray(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Kiritilgan qiymat obyekt bo\'lishi kerak');
  }

  return Object.entries(obj).map(([key, value]) => {
    return { [key]: value };
  });
}

module.exports = {objectToArray};

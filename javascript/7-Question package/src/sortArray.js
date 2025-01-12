function sortArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    return arr.sort((a, b) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return String(a).localeCompare(String(b));
      }
      return a - b;
    });
}
module.exports = {sortArray};
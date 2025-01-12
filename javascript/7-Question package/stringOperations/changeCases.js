function changeCase (str, type) {
    switch (type) {
      case 'upper':
        return str.toUpperCase();
      case 'lower':
        return str.toLowerCase();
      case 'title':
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      case 'sentence':
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      case 'toggle':
        return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
      default:
        return str;
    }
};
module.exports = {changeCase};
  
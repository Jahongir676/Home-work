function stringToBoolean(str) {
    str = str.toLowerCase();
    if (str === 'true' || str === '1' || str === 'yes' || str === 'on') {
      return true;
    }
    if (str === 'false' || str === '0' || str === 'no' || str === 'off') {
      return false;
    }
    return false;
  }
  module.exports = {stringToBoolean};
  
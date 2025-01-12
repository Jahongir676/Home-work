function convertToASCII(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
  }
module.exports = {convertToASCII};
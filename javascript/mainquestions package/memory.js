const getAvailableMemory = function () {
    if (typeof performance !== 'undefined' && performance.memory) {
      const usedJSHeapSize = performance.memory.usedJSHeapSize;
      const jsHeapSizeLimit = performance.memory.jsHeapSizeLimit;
      return jsHeapSizeLimit - usedJSHeapSize;
    } else if (typeof process !== 'undefined' && process.memoryUsage) {
      const memoryUsage = process.memoryUsage();
      return memoryUsage.heapTotal - memoryUsage.heapUsed;
    } else {
      return -1;
    }
  }
  module.exports = {getAvailableMemory};
  
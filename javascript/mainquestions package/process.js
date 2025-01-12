const getProcessInfo = function () {
    return {
      pid: process.pid,
      version: process.version,
      platform: process.platform,
      arch: process.arch,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage()
    };
  }
  console.log("Jarayon haqida ma'lumotlar:");
  console.log(getProcessInfo());
  process.on('exit', (code) => {
    console.log(`Jarayon ${code} kodi bilan tugatilmoqda`);
  });
  module.exports = {getProcessInfo};
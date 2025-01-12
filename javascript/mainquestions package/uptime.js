const os = require('os');
const getUptime = function () {
    const uptimeInSeconds = os.uptime();
    const days = Math.floor(uptimeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((uptimeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((uptimeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(uptimeInSeconds % 60);

    return {
        days,
        hours,
        minutes,
        seconds,
        totalSeconds: uptimeInSeconds
    };
}
module.exports = {getUptime};

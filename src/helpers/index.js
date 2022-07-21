const moment = require("moment");
const formatDate = (date) => {
  return moment(date).add(5, "years").format("M/D/YYYY");
};
const formatTime = (date) => {
  return moment(date).format("HH:mm");
};

const helpers = {
  formatDate,
  formatTime,
};
module.exports = helpers;

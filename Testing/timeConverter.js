const convertTime = (milli) => {
  let time = new Date(milli);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();
  return hours + " hours " + minutes + " minutes " + seconds + " seconds";
};

module.exports = convertTime;

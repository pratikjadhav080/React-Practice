const taxCal = (amt) => {
  if (amt < 2500000) {
    return 0;
  } else if (amt >= 2500000 && amt <= 500000) {
    return amt / 10;
  } else if (amt >= 500000 && amt <= 1000000) {
    return amt / 5;
  } else {
    return amt * (3 / 10);
  }
};

module.exports = taxCal;

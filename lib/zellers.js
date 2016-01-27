'use strict';

const zellers = {};

zellers.modifiedMonth = mo => {
  const month = mo + 1;

  return month < 3 ? month + 12 : month;
};

zellers.modifiedYear = (year, mo) => {
  const month = mo + 1;

  return month < 3 ? year - 1 : year;
};

zellers.getDay = (year, mo, date) => {
  const q = date;
  const m = zellers.modifiedMonth(mo);
  const Y = zellers.modifiedYear(year, mo);

  const h = (
    q +
    Math.floor((m + 1) * 26 / 10) +
    Y +
    Math.floor(Y / 4) +
    6 * Math.floor(Y / 100) +
    Math.floor(Y / 400)
  ) % 7;

  return (h + 6) % 7;
};

module.exports = zellers;

'use strict';

module.exports.modifiedMonth = month => {
  return month < 3 ? month + 12 : month;
};

module.exports.modifiedYear = (year, month) => {
  return month < 3 ? year - 1 : year;
};

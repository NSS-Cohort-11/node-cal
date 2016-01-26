'use strict';

module.exports.modifiedMonth = month => {
  return month < 3 ? month + 12 : month;
};

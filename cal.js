#!/usr/bin/env node  --harmony_destructuring --harmony_rest_parameters

'use strict';

const [,, ...args] = process.argv;

if (args.length === 2) {
  const [month, year] = args;

  console.log(`generateMonth(${year}, ${month})`);
} else if (args.length === 1) {
  const [year] = args;

  console.log(`generateYear(${year})`);
} else {
  console.log('dun broke it');
  process.exit(64);
}

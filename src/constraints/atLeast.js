'use strict';

const cmp = require('comparejs');

const fail = require('../fail');

const atLeast = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (cmp.ge(actual, expected)) {
      return;
    }

    fail('Expected %s to be at least %s.', [ actual, expected ]);
  };
};

atLeast.negated = function (actual) {
  return function (expected) {
    if (arguments.length === 0) {
      throw new Error('Expected is missing.');
    }

    if (!cmp.ge(actual, expected)) {
      return;
    }

    fail('Expected %s not to be at least %s.', [ actual, expected ]);
  };
};

module.exports = atLeast;
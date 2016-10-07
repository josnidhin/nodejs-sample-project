/**
 * @author Jose Nidhin
 */
'use strict';

var bluebird = require('bluebird'),
  mongoose = require('mongoose'),
  config = require('../config');

require('database-driver')(config.database);

/**
 * returns a promise when all the database connections
 * and models are initialised
 */
exports.initialise = function () {
  var promises = [];

  promises.push(mongooseConnect());

  // promise.push(someDBConnect());

  return bluebird.all(promises);
};

/**
 *
 */
function mongooseConnect () {
}

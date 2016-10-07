/**
 * @author Jose Nidhin
 */
'use strict';

process.env.NODE_ENV = 'test';

var bluebird = require('bluebird'),
  config = require('../config'),
  log = require('../config/logger'),
  models = require('../models'),
  promises = [];

log.init('nodejs-sample-porject-test');

before(function (done) {
  promises.push(models.initialise());

  // initialise anything thats necessary

  bluebird.all(promises)
  .then(function () {
    done();
  });
});

after(function (done) {
  // tear down initialised stuff

  done();
});

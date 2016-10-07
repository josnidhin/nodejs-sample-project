/**
 * @author Jose Nidhin
 */
'use strict';

var bunyan = require('bunyan'),
  config = require('../config');

module.exports = {
  logger: undefined,

  init: function (appName) {
    let logStreams = [];

    logStreams.push({
      level: config.log.level,
      stream: process.stdout
    });

    this.logger = bunyan.createLogger({
      name: appName,
      streams: logStreams
    });
  }
};

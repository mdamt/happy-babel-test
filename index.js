'use strict';
require("babel-register")({
  "only" : [ "node_modules/happy-crud/api/*.js", "index.js"]
});

var base = require('./node_modules/happy-crud/api/base-controller.js');

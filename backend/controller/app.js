var express = require('express');
var app = express();

// MF Configurations
function printDebugInfo(req, res, next) {
    console.log();
    next();
}

module.exports = app;
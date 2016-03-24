'use strict';

var _januscli = require('januscli');

var _januscli2 = _interopRequireDefault(_januscli);

var _example = require('./example.js');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_januscli2.default.loadPlugin(_example2.default);

_januscli2.default.start();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _januscli = require('januscli');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Example plugin definition
 */

var Example = function (_Plugin) {
  _inherits(Example, _Plugin);

  function Example(janus) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, janus));

    _this.foo = 'bar';
    return _this;
  }

  /**
   * name() set plugin name
   *
   */

  _createClass(Example, [{
    key: 'name',
    value: function name() {
      return 'example';
    }

    /**
     * Event handlers
     *
     */

  }, {
    key: 'events',
    value: function events() {
      this.janus.on(this.startEventName(), this.startExampleCommand.bind(this));
      this.janus.on('example2:start', this.startExample2Command.bind(this));
    }

    /**
     * CLI options for plugin to
     * respond to.
     *
     */

  }, {
    key: 'cliCommands',
    value: function cliCommands() {
      return [['example', // command line option name
      'Run example command', // Command line description
      this.name() // event name
      ], ['example2', // command line option name
      'Run example 2 command', // command line description
      'example2' // event name
      ]];
    }

    /**
     * CLI options for plugin to
     * respond to.
     *
     * This is a decorator for https://github.com/tj/commander.js/#option-parsing
     * 
     */

  }, {
    key: 'cliOptions',
    value: function cliOptions() {
      var _this2 = this;

      return [['-f, --foo <value>', // command line flags
      'Set Foo', // command line description
      'bar', // default value
      function (value) {
        // Callback (this differs to commander.js)
        _this2.foo = value;
      }]];
    }

    /**
    * Example command
    *
    */

  }, {
    key: 'startExampleCommand',
    value: function startExampleCommand() {
      this.janus.success('Example:', 'Example command started');
      this.janus.info('Example:', 'Foo = ' + this.foo);
    }

    /**
    * Example 2 command
    *
    */

  }, {
    key: 'startExample2Command',
    value: function startExample2Command() {
      this.janus.success('Example:', 'Example 2 command started');
      this.janus.info('Example:', 'Foo = ' + this.foo);
    }
  }]);

  return Example;
}(_januscli.Plugin);

exports.default = Example;
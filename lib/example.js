import { Plugin } from 'januscli';


/**
 * Example plugin definition
 */

class Example extends Plugin {

  constructor(janus) {
    super(janus);
    this.foo = 'bar';
  }

 /**
  * name() set plugin name
  *
  */

  name() {
    return 'example';
  }


 /**
  * Event handlers
  *
  */

  events() {
    this.janus.on( this.startEventName(), this.startExampleCommand.bind(this) )
    this.janus.on( 'example2:start', this.startExample2Command.bind(this) )
  }

 /**
  * CLI options for plugin to
  * respond to.
  *
  */

  cliCommands() {
    return [
      [
        'example', // command line option name
        'Run example command', // Command line description
        this.name() // event name
      ],
      [
        'example2', // command line option name
        'Run example 2 command', // command line description
        'example2' // event name
      ]
    ]
  }

 /**
  * CLI options for plugin to
  * respond to.
  *
  * This is a decorator for https://github.com/tj/commander.js/#option-parsing
  * 
  */

  cliOptions() {
    return [
      [
        '-f, --foo <value>', // command line flags
        'Set Foo', // command line description
        'bar', // default value
        (value) => { // Callback (this differs to commander.js)
          this.foo = value;
        }
      ]
    ]
  }

  /**
  * Example command
  *
  */

  startExampleCommand() {
    this.janus.success('Example:', 'Example command started');
    this.janus.info('Example:', `Foo = ${this.foo}` );
  }

  /**
  * Example 2 command
  *
  */

  startExample2Command() {
    this.janus.success('Example:', 'Example 2 command started');
    this.janus.info('Example:', `Foo = ${this.foo}` );
  }


}

export default Example;

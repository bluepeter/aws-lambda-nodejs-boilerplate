import aws    from 'aws-sdk';
import async  from 'async';
import bunyan from 'bunyan';
import debug  from 'debug';

aws.config.region = 'us-east-1';

class LambdaFunction {

  constructor( event, context, lambdaCallback ) {

    this.log = bunyan.createLogger( { name: "LetsLog", level: "info" } );
    this.log.info( event );

    async.waterfall( [
        ( ...args ) => { this.doA( event, ...args ); },
        ( ...args ) => { this.doB( ...args ); }
      ],
      ( ...args ) => { this.returnJson( lambdaCallback, ...args ); }
    );
  }

  doA( event, callback ) {
    let example = 1;
    if ( example === 2 ) {
      callback( "We had a problem!" );
    } else {
      callback( null, example );
    }
  }

  doB( example, callback ) {
    callback( null );
  }

  returnJson( lambdaCallback, err ) {
    if ( err === null || err === undefined ) {
      lambdaCallback();
    } else {
      lambdaCallback( err );
    }
  }
}

export function handler( ...args ) {
  return new LambdaFunction( ...args );
}

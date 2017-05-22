const aws = require('aws-sdk');
const async = require('async');
const bunyan = require('bunyan');

class LambdaFunction {

  constructor(event, context, lambdaCallback) {

    this.log = bunyan.createLogger({
      name: "LetsLog",
      level: "info"
    });
    this.log.info(event);

    async.waterfall([
        (...args) => {
          this.doA(event, ...args);
        },
        (...args) => {
          this.doB(...args);
        }
      ],
      (...args) => {
        this.finishLambda(lambdaCallback, ...args);
      }
    );
  }

  doA(event, callback) {
    let example = 1;
    if (example === 2) {
      callback("We had a problem!");
    } else {
      callback(null, example);
    }
  }

  doB(example, callback) {
    callback(null);
  }

  finishLambda(lambdaCallback, err) {
    if (err === null || err === undefined) {
      lambdaCallback(null, "We succeeded.");
    } else {
      lambdaCallback(err);
    }
  }
}

exports.handler = (...args) => {
  return new LambdaFunction(...args);
};

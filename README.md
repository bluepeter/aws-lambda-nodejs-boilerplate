This is a simple Node.js AWS Lambda seed to get you going with AWS Lambda.

### Basic

1. Install aws-sdk: `npm i -g aws-sdk`
2. `npm i` in repo directory.
3. Try it out! `npm run start` to run locally. Everything works, right? Good!
   Let's get it into the cloud...
4. Configure aws-sdk in your home directory. Ensure the Lambda-controlling
   `aws_access_key_id` and `aws_secret_access_key` are in, e.g., `~/.aws`. This
   way you don't have to keep this in `.env` which I prefer to keep in version
   control.
5. Create a Lambda function on AWS. Edit `.env` and `package.json` to reflect
   the Lambda function name and ARN.
6. `npm run deploy` to push into the cloud...
7. Go to AWS Lambda console and test if it works. It does, right? Great! Start
   editing `index.js` to whatever you want.

### Advanced

8. Go to the AWS Lambda console and create two aliases, `PROD` and `STAG`.
9. Point `STAG` to `$latest` version. This way, whenever you deploy, `STAG`
   will always use the newest deployment.
10. Ready to update `PROD`? Use `npm run updateProd` and it will create a new
    version from  `$latest` and point `PROD` to that version.
11. How to use this setup? When you invoke a Lambda function from, e.g., API
    Gateway, you can choose, e.g., `MyFunctionName:PROD`, and use `STAG` for,
    well, staging or development.

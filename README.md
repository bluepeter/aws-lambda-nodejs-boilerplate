Lamnbda Lambda Lambda, can I helpya, helpya, helpya?

1. Install aws-sdk and node-lambda globally.
2. Configure aws-sdk in your home directory and ensure the Lambda-controlling
   `aws_access_key_id` and `aws_secret_access_key` are in, e.g., `~/.aws`. This
   way you don't have to keep this in `.env` which I prefer to keep in version
   control.
3. `npm i` in repo directory
4. `npm run start` to run the function locally.
5. `npm run deploy` to push into the cloud... create the Lambda function there
   first.
6. Let's talk Lambda versioning and aliases. Create two Lambda aliases...
   `PROD` and `STAG`. Point `STAG` to `$latest` version. Now let's talk about
   `PROD`...
7. Edit this file first to include your Lambda function name... `./updateProd.sh` will create a new version from `$latest` and point `PROD`
   alias to that version. Yay.

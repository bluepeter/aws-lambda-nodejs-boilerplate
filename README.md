Lamnbda Lambda Lambda, can I helpya, helpya, helpya?

1. Install aws-sdk and node-lambda globally.
2. Configure aws-sdk in your home directory and ensure the Lambda-controlling
   `aws_access_key_id` and `aws_secret_access_key` are in, e.g., `~/.aws`. This
   way you don't have to keep this in `.env` which I prefer to keep in version
   control.
3. Edit `.env` and `updateProd.sh` to personalize to your setup.
4. `npm i` in repo directory
5. `npm run start` to run the function locally.
6. `npm run deploy` to push into the cloud... create the Lambda function there
   first.
7. Let's talk Lambda versioning and aliases. Create two Lambda aliases...
   `PROD` and `STAG`. Point `STAG` to `$latest` version. Now let's talk about
   `PROD`...
8. `./updateProd.sh` will create a new version from `$latest` and point `PROD`
   alias to that version. Yay.

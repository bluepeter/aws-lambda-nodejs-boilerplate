#!/bin/sh
ver="$(aws lambda publish-version --function-name NAMEHERE --query 'Version' --output 'text')"
aws lambda update-alias --function-name NAMEHERE --name PROD --function-version $ver

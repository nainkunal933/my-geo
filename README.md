# MyGEO
A serverless Node.js project that return the users geocoordinates based on their address.

## Installation
> Note: 
> This project is intended to be deployed on AWS Lambda. User might have to add [AWS SAM Local](https://aws.amazon.com/about-aws/whats-new/2017/08/introducing-aws-sam-local-a-cli-tool-to-test-aws-lambda-functions-locally/) for the local development.

1. `git clone git@github.com:nainkunal933/my-geo.git`
2. `Upload to AWS Lambda manually or upload via S3`
3. `Get the Google Geocoding API`
4. `Use AWS environment variables to access the key`

## Resources
* [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
* [AWS Environment Variables](https://docs.aws.amazon.com/lambda/latest/dg/tutorial-env_cli.html)
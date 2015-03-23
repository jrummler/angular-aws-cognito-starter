# angular-aws-cognito-starter
This can be used as a starting point when you want to create a single page app that uses Amazon Web Services. It already includes Facebook login.

## How to start?
1. Get a facebook app id and create a AWS Cognito Identity pool
2. Clone this code and put it on your machine or your webspace
3. Edit app/js/app.js and find YOUR_APP_ID and replace it with yours
4. Edit app/aws-credentials.js with the data from your Cognito identity pool
5. Use the AWS SDK from your browser...

## How to contribute?
I'd love some input from the community. Some tasks I just think of:
* Automatic relogin
* Add Google and Amazon login
* Externalize facebook app id from app.js (like the AWS credentials)
* Gulp/Grunt buildsystem
* Your idea

## License
MIT

# angular-aws-cognito-starter
This can be used as a starting point when you want to create a single page app that uses Amazon Web Services. It already includes Facebook login.

## Requirements and initial setup:
Setup: [npm](https://www.npmjs.com/) install && [bower](http://bower.io/) install  
## How to start?  
1. Get a facebook app id and create a AWS Cognito Identity pool  
2. Clone this code and put it on your machine or your webspace  
3. Edit app/js/app.js and find YOUR_APP_ID and replace it with yours  
4. Edit app/aws-credentials.js with the data from your Cognito identity pool  
5. Start up your dev enviroment with 'grunt serve'  
  
## How to contribute?  
I'd love some input from the community. Some tasks I just think of:..  
1. Store session to persist through refresh..  
2. Add Google, Amazon, and Twitter login (maybe through satellizer)..  
3. Externalize facebook app id from app.js (like the AWS credentials via aws-credentials.json)..  
4. ~~Gulp/Grunt buildsystem~~  Update some of the testing files after we have more login methods.  
5. Your idea..  

## License  
MIT  

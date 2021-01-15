# covid19_tracker
## Credits to Sonny Sangha and Naz Dumansky from cleverprogrammer
## link to the youtube video: https://www.youtube.com/watch?v=cF3pIMJUZxM
## Hosting using Firebase: 
## NOTE: The commands here are executed from npm directory(directory which contains package.json file of npm. For more details on npm [visit](https://github.com/vipul43/RemoteInternship))
- create a firebase account using google account
- go the console and create new project by filling in some details
- install firebase tools in your npm directory by executing the command "npm i -g firebase-tools"
- after the installation login into your firebase account by executing the command "firebase login", this will open a window and ask for google account verification
- after logging into firebase CLI execute the command "firebase init"
- And select option accordingly, Hosting option would do fine
- then select use existing project and select the previously created project in firebase
- for the question on public directory enter answer as "build"
- then "y" for a single page app or "n"
- Now create the build of your project by executing the command "npm run build"
- Now to deploy, execute the command "firebase deploy"
- Happy deploying!!!🤗
- Note: If you made some changes to your app and want to deploy the updated one, rebuild the app using "npm run rebuild" and deploy the rebuilded version using "firebase deploy"

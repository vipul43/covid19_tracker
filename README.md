# covid19_tracker
## Credits to Sonny Sangha and Naz Dumansky from cleverprogrammer
## link to the youtube video: https://www.youtube.com/watch?v=cF3pIMJUZxM
## Hosting using Firebase:
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

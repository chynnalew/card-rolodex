# Card Rolodex

#### This application allows the user to create and store custom TCG cards

#### Chynna Lew, Scott Hutley, Paige Tiedemann, Art Weinstein

## Technologies Used

* JavaScript
* Node Package Manager
* React
* firebase
* CSS
* HTML

## Description
This application uses React.js with firebase and authentication to allow the user to create and store custom TCG cards. The user can:
    - view their cards
    - add new cards
    - update cards
    - delete cards
    - edit existing cards

## Setup/Installation Requirements

* A free Firebase account is required to use this app. 
  - create an account with [Firebase](https://firebase.google.com/) then follow their instructions to add a new project and setup a Firestore database and add it to your webapp. 

* Download or clone [this](https://github.com/chynnalew/card-rolodex) repository to your local machine
* Use the information in your Firebase config to complete the next step
* add a file titled `.env` to the root directory
  * add the following code to your `.env` file
  ```
  REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
  REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
  REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
  REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
  ```
* Replace the placeholders in the values above with the value of each key from your own Firebase application.
* Open the root project directory in the terminal
* Run the command '$ npm install' to install the needed plugins and packages
* Open the application by running the command '$ npm run start'.

## Known Bugs
* No known bugs

## License
[MIT](https://opensource.org/licenses/MIT) 2021

## Contact Information
[Chynna Lew](github.com/chynnalew)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` / `npm start`

To run project in development mode (not optimized)<br />
Access [http://localhost:3000](http://localhost:3000) to view it in the browser.

Running build deployed at [https://givemesomething.github.io/MyContactPage/](https://givemesomething.github.io/MyContactPage/)

Project using the following packages:
* ReactJS
* Redux (react-redux)
* Reactstrap 
* Redux Form
* React Router

Project's structure:
* Header: contain logo and search bar
* CreateNewUSer: contain "Thêm liên hệ" button and add new user function
* EntryList: display all user, sorted alphabetically and display related user if using search bar. Click onto one user to see detail
* DisplayEntryInfo: display selected user in EntryList. User can be deleted and edit from here.

Note:
All user added in the current session will be clear as project using Redux store.

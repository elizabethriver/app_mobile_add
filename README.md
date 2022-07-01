# Getting Started: App Contact agenda

This is a project fullstack, called Contact agenda, and it consist create, update and delete your contact saved at database. It is a first mobile app, so it will be easy to see in your mobile. 

### From client side

In this case, this app is build with Reactjs, making some petitions to API contacts with Axios.js.
At this project is build also with css and bootstrap and react bootstrap, and react spinners too!

Visit here [https://app-mobile-add.vercel.app/](https://app-mobile-add.vercel.app/)

#### `How to run`

Just make a npm i and then a npm start at your [http://localhost:3000](http://localhost:3000)

### From backend side

From the backend side, this app has a API CRUD, with Postgresql, nodejs, express and cors. And finally, this app was deployed at Heroku. It was a funny app to build! 

Visit here [https://app-phone-crud.herokuapp.com/](https://app-phone-crud.herokuapp.com/)
#### `How to run`

Just make this petition CRUD in Postman with [https://app-phone-crud.herokuapp.com/](https://app-phone-crud.herokuapp.com/), and make some request:

##### `Post`
HTTP request: POST
URI: https://app-phone-crud.herokuapp.com/contacts
Request body:
{
    "firstName": "Ana", 
    "lastName": "Julia", 
    "phoneMobile": "233333"
}
##### `Get`
HTTP request: GET
URI: https://app-phone-crud.herokuapp.com/contacts

##### `Update`
HTTP request: PUT
URI: https://app-phone-crud.herokuapp.com/contact/CONTACTID
Request body:
{
    "firstName": "Ana", 
    "lastName": "Julia", 
    "phoneMobile": "233333"
}
##### `Delete`
HTTP request: DELETE
URI: https://app-phone-crud.herokuapp.com/contact/CONTACTID



//Build complete setup for project in  frontend and backend as well 

1)	git init command and make json file
2)	make .env file 
3)	public folder maintain/also temp inside this 
4)	src folder :- inside this 6 more folder we make 
  a.	controller
  b.	db
  c.	middleware 
  d.	routes
  e.	models
  f.	utils
  5)app.js , constant.js and inde.js we make file 
In json file we add type : module
  "main": "index.js",
  "type": "module",

=> After file and folder creation we install some package 
Like nodemon and prettier 

For installing :- npm i -D nodemon 
setup in json file "scripts": {
    "dev": "nodemon src/index.js"
  },

Install prettier for convenient purpose, when add prettier file some file is also be added in it :-
File name :- .prettierrc(file name same hoga)
Inside this file we save some change based on prettier
{
    "singleQuote" : false ,
    "bracketSpacing" : true ,
    "tabWidth" :2,
    "trailingComma" : "es5",
    "semi" : true 
}

And also prettierignore file is created and some code 
:-  we don’t change the formate of the file 
/.vscode
/node_modules
./dist
*.env
.env
.env.*

Now another setup we do for formatting the file
//connection of database and mern debugging 
Use online database :- mongodb atlas
For connecting database with the project 
(Follow video number 8 for connection) 

Add url and port in our env file :--
PORT = 8000
MONGODB_URI = mongodb+srv://<username>:<password>@cluster0.vw9mvou.mongodb.net

After that require packages :=
1)	dotenv 
2)	mongoose
3)	express
Intall all of them :- npm i mongoose dotenv express  
than index.js file we try to connect the mongodb with the help of mongoose:-
1)Try catch or promises use kro 
2) async or await use kro 
Index.js file mai:-
Database connect krna hai na using mongoose 
Import the mongoose than using async and await function we try to connect the the data base using 
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

ya to index.js file mai direct connect kro ya phir app db folder mai jakr connect kro or phir usko main index file mai upload kro .
import krte time file name pura use krna hai 
or dotenv ko update krna hai in json file mai 
 "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"


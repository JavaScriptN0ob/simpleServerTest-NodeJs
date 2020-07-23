# simpleServerTest-NodeJs

#### Wenpei Z

~~22/07/2020Just a basic server built by NodeJs, Using Postman to get and post.
This server is not finished yet, more updates will coming in next few days.~~

### Updated on 23/07/2020
  all finished, debugged & tested.

Please download the file and using command:
  1. ```npm install```
  2. ```npm run dev```
If you run the server correctly, you will see a tips call `Captain Teemo on duty in terminal`. 
The server is build by express and nodemon, npm will help you download all node modules needed.

After you get the server run properly, please go ***localhost:12580*** in postman try different API.
***localhost:12580/people*** using **get** method will send you all people object.
***localhost:12580/people?name=xxx*** using **get** method will send you the people who matched your criteria.
***localhost:12580/people*** using **post** method will let you post your name into the database, **name is required & can not using empty name**.

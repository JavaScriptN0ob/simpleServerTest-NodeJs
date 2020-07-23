# simpleServerTest-NodeJs

#### Wenpei Z

~~22/07/2020Just a basic server built by NodeJs, Using Postman to get and post.
This server is not finished yet, more updates will coming in next few days.~~

### Updated on 23/07/2020
  all finished, debugged & tested.

Please download the file and using command:
  1. ```npm install```
  2. ```npm run dev```<br>
If you run the server correctly, you will see a tips call <br>`Captain Teemo on duty` in terminal. <br>
The server is build by express and nodemon, npm will help you download all node modules needed.

After you get the server run properly, please go <br>***localhost:12580*** <br>in postman try different API.<br><br>
***localhost:12580/people*** <br>using **get** method will send you all people object.<br><br>
***localhost:12580/people?name=xxx*** <br>using **get** method will send you the people who matched your criteria.<br><br>
***localhost:12580/people*** <br>using **post** method will let you post your name into the database, <br>**name is required & can not using empty name**.

# simpleServerTest-NodeJs

#### Wenpei Z

~~22/07/2020Just a basic server built by NodeJs, Using Postman to get and post.
This server is not finished yet, more updates will coming in next few days.~~

### Updated on 23/07/2020
  all finished, debugged & tested.

### Updated on 02/08/2020
  After deeper learning, I divide server.js into model, controller, routes, middleware layers. Please change branch to divided to check. <br>

Please download the file and using command:
  1. ```npm install```
  2. ```npm run dev```<br>
-- If you run the server correctly, you will see a tips called <br>`Captain Teemo on duty` in terminal. <br>
The server is build by express and nodemon, npm will help you download all node modules needed.<br><br>
-- Please also remeber in mind that always  using <br>`CTRL` **+** `C` in the terminal <br>to **shut down server** when you no longer need the server **avoiding localhost occupied**

After you get the server run properly, please go <br>***localhost:12580*** <br>in postman try different API.<br><br>
***1. localhost:12580/people*** <br>using **get** method will send you all people object.<br><br>
***2. localhost:12580/people?name=xxx*** <br>using **get** method will send you the people who matched your criteria.<br><br>
***3. localhost:12580/people*** <br>using **post** method will let you post your name into the database, <br>**name is required & can not using empty name**.<br><br>

Also, if you do not want to download or run any files from here. Please see screen shoots for a better understanding.
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/install.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/rundev.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/getAll.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/findWayne.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/123%20404.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/posted.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/400.png)
![image](https://github.com/JavaScriptN0ob/simpleServerTest-NodeJs/blob/master/source/screenshoot/newpost.png)

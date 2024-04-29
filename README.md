## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

To check node is installed or not use command
```bash
node --version
```
use node version v16.18.0 or above
## Cloning and Running the Application in local

Clone the project into local
1. open command prompt or terminal
2. go to the folder or directory where you want to clone this repository
3. write command  git clone repository url
```bash
git clone 
```
4. type code . to open project folder in vs code
```bash
code .
```
5. open terminal in vs code
6.  Go into the project folder Assignment
```bash
cd Assignment
```
7. Install all the npm packages. Type the following command to install all npm packages

```bash
npm install
```

8. In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## production build of your app

After completing the below steps if you are on same network you can use this application in your mobile as well.
1. Type npm run build to production build of your app 
```bash
npm run build
```
2. Static Server
```bash
npm install -g serve
serve -s build
```
The Application Runs on
  Local:            http://localhost:3000        
  On Your Network:  http://192.168.142.90:3000 

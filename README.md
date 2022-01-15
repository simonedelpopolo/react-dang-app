# @react-dang/app

###### Basic React-Dang-Application.

___

## Index of Contents

- [Description](#description)
  - [The serve library](#the-serve-library)
- [Installation](#installation)
  - [Manual](#manual)
  - [react-dang](#automated) 

___

### Description

The ReactDang Application is an npmjs package that will initialize a Basic React Web Application having two default pages to start working with.  
Home page and the contacts page.

It uses Babel under the hood to compile the React Application.
It spins up webpack with two default configurations:

- Development -> It builds the javascripts specifically for webpack devServer.
- Production -> It builds the app with some performance improvements.

Available Components:

- Header -> Handles the header shared between the web application pages.
- Links -> Handles the available links of the web application. It is imported in the Header.
- Index -> Handles the Home Page.
- Contacts -> Handles the Contacts Page.
- ContactForm -> Basic contact form ⚠ Necessary from the developer to project the business logic of it, in particular DB and server side. It si imported in the Contacts.
- Footer -> Handles the footer shared between the web application pages.

#### The serve library

This is a personal experimental server to serve the React generated code.  
I have noticed a much better resource consumption, in terms of CPU and RAM by using a self-created library instead of using webpack serve function.  
In certain cases I saw a 70% less resource usage.  
> ⚠ Consider this ABSOLUTELY not ready for production enviroment but try it out for testing and profiling.

> ℹ use it with production compiled React because it lacks of the socket connection to handle the hot and live reload provided by webpack devServer

`npm run build-serve.server-alpha # this script will compile production and launche the serve library`

`node ./lib/serve.js # if you like it ;)`

```javascript
// file ./lib/index.js
// around line 52 you can modify the port if needed

server.listen( 3001, '0.0.0.0', null,
    () => {
        console.log( server.address() )
        console.log( `http://${ server.address().address }:${ server.address().port }` )
    } 
)
```

___

#### Installation

##### Manual

`npm info @react-dang/app # get the latest alpha version`

`npm install @react-dang/app@0.x.x-alpha # replace the major and minor with latest alpha release`

`cp -rf ./node_modules/@react-dang/app/* ./ # copy the content of the package in your root directory`

> ℹ Keeping the module, in the node_modules directory, could be practical in case is needed a restore.

remove it with `rm -rf ./node_modules/@react-dang`

`npm install # install the required devDependencies and dependencies`

`npm run build-dev # this will watch for file changes and it will compile once saved.`

> ℹ open another terminal

`npm run serve-dev`

> ℹ open your broser to http://localhost:3000 
> if you need to use another port, set it in the webpack.dev.config.js property devServer

##### Automated

It's possible to automate the installation using [react-dang](https://github.com/simonedelpopolo/react-dang/tree/v0.0.x)

`npm info react-dang # get the latest tag alpha`

`npx react-dang@0.x.x 'your-react-application-name' # replace the major and minor with latest alpha release`

> ℹ react-dang deletes the module complitely

`npm run build-dev # this will watch for file changes and it will compile once saved.`

> ℹ open another terminal

`npm run serve-dev`

> ℹ open your broser to http://localhost:3000 
> if you need to use another port, set it in the webpack.dev.config.js property devServer

___

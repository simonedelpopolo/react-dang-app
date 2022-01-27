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

The ReactDang Application is a npmjs package that will initialize a Basic React Web Application having two default pages to start working with.  
Home page and a Contacts page.

It uses:
- Babel under the hood to compile the React Application.
- eslint for linting.
- It spins up webpack with two default configurations:

  - Development -> It builds the javascript specifically for webpack devServer.
  - Production -> It builds the app with some performance improvements.

Available Components:

- Header -> Handles the header shared between the web application pages.
- Links -> Handles the available links of the web application. It is imported in the Header.
- Index -> Handles the Home Page.
- Contacts -> Handles the Contacts Page.
- ContactForm -> Basic contact form. It is imported in the Contacts.
  - ⚠ Necessary from the developer to project the business logic of it, in particular DB and server side.
- Footer -> Handles the footer shared between the web application pages.

___

- #### The serve library

This is a personal experimental server to serve the React generated code.  
I have noticed a much better resource consumption, in terms of CPU and RAM by using a self-created library instead of using webpack serve function.  
In certain cases I saw a 70% less resource usage.
> ⚠ Consider this ABSOLUTELY not ready for production environment but try it out for testing and profiling.

> ℹ use it with production compiled React because it lacks of the socket connection to handle the hot and live reload provided by webpack devServer

- Spin up the alpha server library.
```shell 
npm run build-serve.server-alpha 
# this script will compile the production and launch the serve library`

# OR
npm run build-prod # ℹ CTRL+c to stop watching

node ./lib/serve.js # if you like it ;)

# ℹ open the browser at http://localhost:3000

```

```javascript
// ℹ to modify the port of the serve library
// file ./lib/index.js
// around line 52 you can modify port and address if needed

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

```shell

mkdir my-project
cd my-project

npm install @react-dang/app

cp -rf ./node_modules/@react-dang/app/* ./ 
# copy the content of the package, (node_modules directory) into your project root directory

```

> ℹ Keeping the module, in the node_modules directory, could be practical in case is needed a restore.

remove it with `rm -rf ./node_modules/@react-dang`

```shell

npm install # install the required devDependencies and dependencies

npm run build-dev # this will watch for file changes and it will compile once saved.

# ℹ open another terminal

npm run serve-dev

# ℹ open your broser to http://localhost:3000 

```

> to use another port, set it in the webpack.dev.config.js, property devServer

##### Automated

It's possible to automate the installation using [react-dang](https://github.com/simonedelpopolo/react-dang/tree/v0.0.x)

```shell

mkdir my-project
cd my-project

npx react-dang install --name='my-react-app' --directory='my-react-app'

```

> ℹ react-dang deletes the module @react-dang/app completely from the hard drive.

```shell

cd my-react-app
npm run build-dev 
# this will watch for file changes and it will compile once saved.

# ℹ open another terminal
npm run serve-dev
# ℹ open the browser at http://localhost:3000
```

> ℹ The simplest usage `npx react-dang i`  
> _It will generate the project-name and the directory_
___


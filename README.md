# @react-dang/app

###### Basic React-Dang-Application.

___

## Index of Contents

- [Description](#description)
- [Installation](#installation)
  - [react-dang](#automated)
- [JetBrains OSS Licence](#jetbrains-oss-license)

___

### Description

The ReactDang Application is a npmjs package that will initialize a Basic React Web Application having two default pages to start working with.  
The Home Page and the Contacts page.

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
- NotFound -> Handles 404
- Contacts -> Handles the Contacts Page.
- ContactForm -> Basic contact form. It is imported in the Contacts.
  - ℹ When using the serve library, one route, called `message`, handles the fetch request from the ContactForm.
- Footer -> Handles the footer shared between the web application pages.

___

#### Installation

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

npm run webpack-serve-dev

# ℹ open your browser to http://localhost:3000 

```

> to use another port, set it in the webpack.dev.config.js, property devServer

##### Automated

It's possible to automate the installation using [react-dang](https://github.com/simonedelpopolo/react-dang/)

```shell

mkdir my-project
cd my-project

npx react-dang install --name='my-react-app' --directory='my-react-app'

```

> ℹ react-dang deletes the module @react-dang/app completely from the node_modules directory.

```shell

cd my-react-app
npm run build-dev # this will watch for file changes and it will compile once saved.

# ℹ open another terminal

npm run webpack-serve-dev
# ℹ open the browser at http://localhost:3000
```

> ℹ The simplest usage  
> 
> `npx react-dang install`
> 
> _It will give the project a and make the directory that will be the root of the project._

___

> ℹ @react-dang/app now use [Koorie](https://github.com/simonedelpopolo/koorie) as experimental server.
___

### JetBrains OSS License

I want to thank JetBrains to grant me the Open Source Software license for all their products. This opportunity gives me strength to keep on going with my studies and personal project.  
To learn more about this opportunity have a look at [Licenses for Open Source Development - Community Support](https://www.jetbrains.com/community/opensource/).

_Thank you_

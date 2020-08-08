
[license-badge]: https://img.shields.io/github/license/pmqueiroz/proffy?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/pmqueiroz/proffy?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/pmqueiroz/proffy?color=%238257E5
[license-url]: https://github.com/JuanPabllo/Proffy/blob/master/README.md
[issues-url]: https://github.com/JuanPabllo/Proffy/issues
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]: https://www.npmjs.com/
[expo-url]: https://expo.io/

<!-- VARS -->

<div align="center">

![](.github/docs/img/landing.svg)

</div>

<br>
<p align="center">
    Online teaching platform made with React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>

<div align="center">  
    
[![License][license-badge]][license-url]
![Git Stars][star-badge]
[![Netfly Stats][netfly-badge]][netfly-url]
[![Netfly Stats][proffy-apk-badge]][proffy-apk-url]
![NLW Stats][nlw-badge]
![Codacy Quality][codacy-badge]

</div>

### Content

-   [Getting Started](#Getting-Started-)
    -   [Cloning](#Cloning)
    -   [Requirements](#Requirements)
        -   [Web](#Web)
        -   [Server](#Server)
        -   [Mobile](#Mobile)
    -   [Running](#Running)
-   [Issues](#Issues-)
    -   [Report](#Report)
    -   ~~Trouble Shooting~~
-   [Contributing](#Contributing-)
-   [Todo](#Todo-)
-   [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/JuanPabllo/Proffy.git

# Access the project folder
$ cd proffy
```

#### Requirements

-   [Node.js][node-url]
-   [Yarn][yarn-url] or [npm][npm-url]
-   [Expo][expo-url]

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

> The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in web directory
$ cd web

# Installing depencies
$ yarn add @types/react-router-dom -D
$ yarn add axios
```

To start the server you need the database, to make migrations use the command:

```
$ yarn knex:migrate
```

> The above command is a custom command made on `package.json` file. (Ln 8, Col 5)

##### Server

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

> The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
$ cd server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```

##### Mobile

This projects use third party dependecies and fonts that need to be installed in development, use that command to install all needed dependencies and fonts

```ps
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn install
```

> The above command will install all third party dependencies and fonts used. If you want to install manually all dependencies and fonts used. follow the steps bellow

```ps
# Installing fonts used
$ expo install expo-font @expo-google-fonts/archivo
$ expo install expo-font @expo-google-fonts/poppins

# Installing dependecies required
$ yarn add @react-navigation/native
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ yarn add @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
$ yarn add axios
$ expo install @react-native-community/async-storage
```

#### Running

To start the Web Server run the command

```ps
# Entering in web directory
$ cd web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering in Server directory
$ cd server

# Run the Back Server
$ yarn start
```

To run the mobile version run the command

```ps
# Entering in Mobile directory
$ cd mobile

# Run the Mobile Version
$ yarn start
```

### Issues 🐛

#### Report

In case you are having any problem do not be shy to report to us in [Issues][issues-url] session.

### Contributing 🤝

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork pmqueiroz/proffy

# Clone your fork
$ git clone {your-fork-url}
$ cd proffy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project

### Todo 📌

Version 2.0 Features

-   [x] Splash screen
-   [ ] Extended layout
-   [ ] User auth
-   [ ] Password recovery
-   [ ] Teacher profile
-   [ ] Pagination of classes result
-   [ ] Show teacher schedule hours
-   [ ] Save favorite teachers
-   [ ] User logout
-   [ ] Deploy

### License 📝

This project is under the MIT license. See the [LICENSE][license-url] for more information.

# burger - Node Express Handlebars Example

## Overview

This is a simple app. built on MySQL, Node, Express & Handlebars to demonstrate web based read/update actions against mysql database.

### App Details

* Eat-Da-Burger! is a restaurant app that lets the users input the names of burgers they'd like to eat.
* The user submits a burger's name in the form, and it will create a record, and display it on the page `waiting to be devoured`.
* Just click the `Devour it!` button, to comsume the burger, from which the burger show on the devoured column. 
* The application will keep history of Burgers made and consumed. 

## Setup Instructions

1. Clone & Setup Application
    1. Clone Repo [git link]
    2. Install required modules `npm install`.
2. Setup the Database
    1. go to config directory to provide DB credentials.
        1. modify the `connection.js` to suite needs
    2. From withing the `burger/db` directory, \
        a. Run setup script \
            `--- or ---` \
        b. Import `schema.sql` & `seeds.sql`
3. Start the Application
    ```bash
    #> node server.js
    ```
4. Use web App

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -

### Minimum Requirements

Current versions of
Tech | Flavor
---|---
OS | Linux or Mac
Languanges | NodeJS
Database | MySQL

- - -

### Hosting on Heroku

Feel free to try Heroku for hosting this app, but at your own risk.  Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

**Good Luck!**
## Full-stack React + Node/Express app to allow users to list their skills and get corresponding service requests from clients

## <u>Introduction: What is this app about?</u>

This is a service provider platform type app which enables a worker or provider to list his/her skills and competencies in those skills. Once those are done, this app provides the provider with a list of most closely matching work or service requests which he/she can accept or reject. The one stipulation is that the service provider cannot accept more than one service/work with same start dates.

## <u>Tech Stack: What voodoo technology made this happen?</u>

Here are the technological aspects of this full stack app in terms of front-end and back-end:

a). <u>Front-end:</u>: React based with details below:

1. `ReactJs` with `React Hooks` (like useState, useEffect, useCallback and useContext) and `Context Api`
2. Reusable UI Components are built with the `Ant Design` framework called `antd` in package.json. It provides for most reused components like Button, Input, Checkboxes and so on. Visit their docs here: https://ant.design/components/overview/.
3. `Axios` library/client is used to send and receive http request and response correspondingly.
4. `react-router` is a well known routing library for React.

b). <u>Back-end:</u> Node and Express based with details below:

1. `Express` is a web framework based on Node.js.
2. `config`: is another npm package that provides environment configuration for Node.js applications. Configuration files (by convention) are stored within a directory name config directly underneath root directory. Create a default.json file to provide defaults and other json files based on environments etc.
3. `colors` npm package is used to display node log messages in various colors as well as font-styles. This is an optional package.
4. `faker` is a npm package that plays a vital role for this app currently. As the name suggests this package/library provides various methods that generate various random and fake values like name, address, cards, UUID and so many more. This library has been used to build the list of skills as well as service requests that is served by the express server.
5. `helmet` is another great npm package that adds a lot of HTTP headers to secure a express app.
6. `moment` library has many utility functions to work with date and time in the JS world. In this app's case, we use moment to extract only the date part in a particular format from a string utc date format.

c). <u>Database:</u> No actual DBMS has been used currently. All the data is generated by faker-js and served by express. An eventual plan could be using MongoDB or even plain json or text files to store skills and user choices.

## <u>Scripts that run the app - The Short Version</u>

There are 5 scripts to run the two applications: start, serve, dev_serve, client and dev. These scripts are discussed below:

1. `start` script: is a node command to run the main nodejs file called server.js. This will start the node/express server in non-monitoring, simple mode.
2. `serve` script: runs the main nodejs file called server.js using the `nodemon` package in a auto-reloading, monitoring mode. This will allow us to reload the server (only) when something changes in the server based code. This is the preferred mode of running our server.
3. `dev_serve` script: same as the `serve` script above with one difference - it is using the `cross-env` package to set the NODE_ENV variable to development. Setting node_env to development causes the config library to use the settings from a file named `development.json`.
4. `client` script: runs the client or React based code that displays a single page with transactions. We utilize the `--prefix` option to `npm start` to specify the client sub-folder within the root folder. Change the prefix path based on your client sub-folder location.
5. `dev` script: utilizes the `concurrently` package to simultaneously run both the `client` and the `server` scripts from above. This is the preferred mode to run during development to allow for debugging as well.

## <u>So, what does your API look like ?</u>

I say its fancy, the API's are fancy. Built using express-js, we currently have two main endpoints. Fancy a look below:

1. Get a set of skills (10 at this time) to be display for a Service Provider.

   Sample request and response below:

```
    GET http://localhost:5000/api/v1/services/skills
    ********************
    {
    "success": true,
    "data": [
        "hard",
        "hacking",
        "Gourde",
        "multimedia",
        "Intelligent",
        "overriding",
        "application",
        "Identity",
        "Bedfordshire",
        "Metrics"
    ]
}
```

2. Get a set of service requests from clients (5 at this time) to be selected by the Service Provider.

   Sample request and response below:

```
   POST http://localhost:5000/api/v1/services/requests
    Body (raw - json)
    {
        "selectedSkills": [
            "Terrace",
            "collaborative",
            "systems"
        ]
    }
    ********************
    {
    "success": true,
    "data": [
        {
            "clientId": "29y149",
            "clientFullName": "Anne Pollich",
            "srvRequirementDesc": "Ut ad commodi molestiae modi. Dolor sunt consequatur vero animi neque.",
            "serviceStartDate": "31/03/2021",
            "serviceEndDate": "22/02/2022",
            "skill": "Terrace"
        },
        ...
    ]
}
```

## <u>Running the App: I am curious, how do I play with the app?</u>

Keep in mind, we have two apps within the whole app: a react frontend and a express backend. Fear not!! The process of running the app has been made butter-smooth. Let's get started:

0. The step zero (duh!!) is executing `npm i` at both levels: root level and then inside the /service-provider-web level.
1. The easiest way to get started is executing the command `npm run dev` from the project's root. This will run both the frontend/client and the backend/server concurrently. You can then access the application webpage/frontend at the web address `http://localhost:3000`.
2. Go on, give it shot.

3. <u>NOTE this</u>: you need to plop all your environment-dependent variables into one of your `config` package based configuration files (each variable with a unique key and the string as the value). Again few things are involved:

   i. Create a directory named `config` directly under the root directory. All configuration files with be kept in this directory. The config package expects a `default.json` file to provide details. A sample file looks like this

   ```
       {
           "baseUrl": "http://localhost:5000",
           "someEnvironmentSpecificKey": "something-dev-env.ext"
       }
   ```

   ii. The keys (as with json files) can be named anything.

   iii. The `baseUrl` key is set to localhost:5000 as that is the port where we want to run our express server locally. Feel free to change the port but beware there might be changes needed elsewhere.

   iv. Now, now - do not despair. we are closer to the end.

   v. <u>Next, this is what you do: </u> create another json file (and more as required) mimicing the structure of default.json which will store a environment-specific information such as connection strings. If your node.js's development environment is named `development`, use that name to create a `development.json` file. ENSURE THIS FILE IS GIT IGNORED AND NOT COMMITED AND PUSHED TO REMOTE.

   vi. Check out the `dev` script in the root/express's package.json file. Notice a piece of code like so `npx cross-env NODE_ENV=development nodemon server`. What this does is it uses a npm package called `cross-env` to set our `NODE-ENV` to `development`. UPDATE THIS NODE_ENV TO WHICHEVER ENVIRONMENT AND CORRESPONDINLY NAMED config/<environment-name>.json file you are intending to use. (Hold on, yes you saw this information before - if you read things carefully)
   </div>

## <u>Further and Future work</u>

There are can be a big bucket list but some of the more important ones to make the app more practical and useful are follows:

1. The Service Requests page (currently the last page) is missing some required functionality like (a) user is allowed to click accept on all rows even those with duplicated start date (b) clicking on the Accept or Reject buttons doesn't do anything.
2. When you go back from Service Requests (last) page to Skills Ratings page, the state of ratings isn't persisted. A proper use and configuration around useEffect hook is required for this as far as I can see at this point.

## <u>Feedback and Contact</u>

Please feel free to suggest updates and fixes.

View my linkedin at https://www.linkedin.com/in/ashish-karki.

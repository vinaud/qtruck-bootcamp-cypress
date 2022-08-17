const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const mongo = require('cypress-mongodb')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mongo.configurePlugin(on);
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env:{
      browserPermissions: {
        notifications: "allow",
        geolocation: "allow",
      },
      mongodb: {
        "uri": 'mongodb+srv://qa:cademy@cluster0.baz8uu4.mongodb.net/QtruckDB?retryWrites=true&w=majority',
        "database": "QtruckDB",
      }
    }
  },
});

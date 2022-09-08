const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
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
    }
  },
});

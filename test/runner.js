const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const dotenv = require('dotenv');
dotenv.config();

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: `${process.env.TOKEN}`,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
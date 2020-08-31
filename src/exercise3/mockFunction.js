const apiCall = require('./apiCall')
/**
 * Calculates the meaning of live, taking at least 2 seconds.
 * Is not allowed to be disturb with arguments
 */
async function callTheApi(input) {
  if (!input) {
    throw new Error('I need to have a value')
  }

  return await apiCall.generateArr(input)
}


module.exports = {
  callTheApi
}
const api = require('./api')

/**
 * Is not allowed to be disturb with arguments
 */
async function processData(input) {
  if (!input) {
    throw new Error('I need to have a value')
  }

  return await api.getData(input)
}


module.exports = {
  processData
} 
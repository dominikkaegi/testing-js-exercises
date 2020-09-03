const api = require('./api')

/**
 * Add an input as prefix for the returning data
 */
async function processData(input) {
  if (!input) {
    throw new Error('I need to have a value')
  }

  return await api.getPrefixedData(input)
}


module.exports = {
  processData
} 
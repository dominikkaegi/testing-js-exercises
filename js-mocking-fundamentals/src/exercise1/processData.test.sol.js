const mockFunction = require('./processData')
const api = require('./api')


test('The process function returns an array of prefixed data', async () => {
  jest.spyOn(api, 'getPrefixedData')

  api.getPrefixedData.mockImplemefntation((input) => new Promise((resolve) => {
    resolve([`${input}_0`, `${input}_1`]);
  }))

  expect(await mockFunction.processData('abc')).toStrictEqual(['abc_0', 'abc_1'])

  api.getPrefixedData.mockRestore()
})  
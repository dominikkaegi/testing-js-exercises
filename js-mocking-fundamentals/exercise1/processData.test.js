const mockFunction = require('./processData')
const apiCall = require('./api')


describe('Mock Function Test', () => {
  test('call the api', async () => {
    jest.spyOn(apiCall, 'getPrefixedData')

    apiCall.getPrefixedData.mockImplementation((input) => new Promise((resolve) => {
      resolve([`${input}_0`, `${input}_1`]);
    }))

    expect(await mockFunction.processData('abc')).toStrictEqual(['abc_0', 'abc_1'])

    apiCall.getPrefixedData.mockRestore()
  })  
})
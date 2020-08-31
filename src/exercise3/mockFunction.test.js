const mockFunction = require('./mockFunction')
const apiCall = require('./apiCall')


describe('Mock Function Test', () => {
  test('call the api', async () => {
    jest.spyOn(apiCall, 'generateArr')

    apiCall.generateArr.mockImplementation((input) => new Promise((resolve) => {
      resolve([`${input}_0`, `${input}_1`]);
    }))

    expect(await mockFunction.callTheApi('abc')).toBe(['abc_0', 'abc_1'])

    apiCall.generateArr.mockRestore()
  })  
})

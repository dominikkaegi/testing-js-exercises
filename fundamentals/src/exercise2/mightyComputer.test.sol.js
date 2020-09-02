const meaning = require('./mightyComputer')

const { calculateMeaningOfLive } = meaning


test('mightyComputer calculates the meaning', async () => {
  const result = await calculateMeaningOfLive()
  const expected = 42
  expect(result).toEqual(expected)
})

test('mightyComputer loses focus when disturb', async () => {
  expect(() => {
    const disturbance = 'Do you have an answer yet?'
    return calculateMeaningOfLive(disturbance)
  }).rejects.toThrow()
})

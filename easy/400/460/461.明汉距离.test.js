const hammingDistance = require('./461.明汉距离.')
test('1',()=>{
  expect(hammingDistance(1,4)).toBe(2)
})
test('2',()=>{
  expect(hammingDistance(0,0)).toBe(0)
})
test('3',()=>{
  expect(hammingDistance(0,1)).toBe(1)
})


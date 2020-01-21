const  oddCells = require('./1252.奇数单元格的数目')
test('1',()=>{
  expect(oddCells(2,3,[[0,1],[1,1]])).toBe(6)
})
test('2',()=>{
  expect(oddCells(2,2,[[1,1],[0,0]])).toBe(0)
})

const minTimeToVisitAllPoints = require('./1266.访问所有点的最小时间');

test('1', () => {
  expect(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])).toBe(7);
});
test('2', () => {
  expect(minTimeToVisitAllPoints([[3,2],[-2,2]])).toBe(5);
});
test('3', () => {
  expect(minTimeToVisitAllPoints([[1,1]])).toBe(0);
});
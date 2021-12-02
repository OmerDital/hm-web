import { getFilteredData } from '.';

const data = [{ name: 'a' }, { name: 'bc' }, { name: 'c' }];

test('filter all data except one', async () => {
  const filtered = getFilteredData('a', data);
  expect(filtered.length).toBe(1);
});

test('filter nothing', async () => {
  const filtered = getFilteredData('', data);
  expect(filtered.length).toBe(3);
});

test('filter more then one result', async () => {
  const filtered = getFilteredData('c', data);
  expect(filtered.length).toBe(2);
});
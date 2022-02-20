import {timeKey, uuid} from '../key';

test('uuid', () => {
  expect(uuid()).toHaveLength(36);
});

test('timeKey', () => {
  expect(timeKey()).toHaveLength(13);
});

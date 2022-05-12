import {timeKey, uuid} from '../key';

test('uuid', () => {
  expect(uuid()).toHaveLength(36);
  expect(uuid('game_')).toHaveLength(36 + 5);
});

test('timeKey', () => {
  expect(timeKey()).toHaveLength(15);
  expect(timeKey('game_')).toHaveLength(15 + 5);
});

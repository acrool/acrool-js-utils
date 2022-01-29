import {enumFindKey} from '../enum';

test('enumFindKey', () => {

  enum ECategoryIdMapping {my = '1', you = '2'}

  expect(enumFindKey(ECategoryIdMapping, '1')).toStrictEqual('my');
  expect(enumFindKey(ECategoryIdMapping, '2')).toStrictEqual('you');
});

import {
  isDate,
  isEmpty, isJSON, isNotEmpty, isIP, regPattern, deepCompare, objsComposeByKey
} from '../equal';

test('deepCompare', () => {
  expect(deepCompare(123, 123)).toBeTruthy();
  expect(deepCompare(123,'123')).toBeFalsy();
  expect(deepCompare({name: 'jack', child: {birthday: '1988-12-14'}}, {name: 'jack', child: {}}, true)).toBeFalsy();
  expect(deepCompare({name: 'jack', child: {birthday: undefined}}, {name: 'jack', child: {}})).toBeTruthy();
  expect(deepCompare(['jack'], ['jack'])).toBeTruthy();
  expect(deepCompare(() => {}, () => {})).toBeFalsy();
});

test('regPattern', () => {
  expect(new RegExp(regPattern.email).test('jack@mail.com')).toBeTruthy();
  expect(new RegExp(regPattern.email).test('jack.com')).toBeFalsy();
  expect(new RegExp(regPattern.number).test('123456')).toBeTruthy();
  expect(new RegExp(regPattern.number).test('a123456')).toBeFalsy();
  expect(new RegExp(regPattern.number).test('123456b')).toBeFalsy();
  expect(new RegExp(regPattern.number).test('123v456b')).toBeFalsy();
  // expect(new RegExp(/^[.A-Za-z0-9]+$/).test('chihfan')).toBeTruthy();
});

test('isEmpty', () => {
  expect(isEmpty('')).toBeTruthy();
  expect(isEmpty({})).toBeTruthy();
  expect(isEmpty(0, {isZero: true})).toBeTruthy();
  expect(isEmpty('0', {isZero: true})).toBeTruthy();
  expect(isEmpty(0, {isZero: false})).toBeFalsy();
  expect(isEmpty('0', {isZero: false})).toBeFalsy();
  expect(isEmpty('false', {isFalse: true})).toBeTruthy();
  expect(isEmpty(false, {isFalse: true})).toBeTruthy();
  expect(isEmpty('false', {isFalse: false})).toBeFalsy();
  expect(isEmpty(false, {isFalse: false})).toBeFalsy();
  expect(isEmpty([])).toBeTruthy();
  expect(isEmpty(null)).toBeTruthy();
  expect(isEmpty(undefined)).toBeTruthy();
  expect(isEmpty('helloWorld')).toBeFalsy();
});


test('isNotEmpty', () => {
  expect(isNotEmpty('')).toBeFalsy();
  expect(isNotEmpty(0, {isZero: true})).toBeFalsy();
  expect(isNotEmpty('0', {isZero: true})).toBeFalsy();
  expect(isNotEmpty(0, {isZero: false})).toBeTruthy();
  expect(isNotEmpty('0', {isZero: false})).toBeTruthy();
  expect(isNotEmpty('false', {isFalse: true})).toBeFalsy();
  expect(isNotEmpty(false, {isFalse: true})).toBeFalsy();
  expect(isNotEmpty('false', {isFalse: false})).toBeTruthy();
  expect(isNotEmpty(false, {isFalse: false})).toBeTruthy();
  expect(isNotEmpty([])).toBeFalsy();
  expect(isNotEmpty(null)).toBeFalsy();
  expect(isNotEmpty(undefined)).toBeFalsy();
  expect(isNotEmpty('helloWorld')).toBeTruthy();
});


test('isDate', () => {
  expect(isDate('2022-01-09')).toBeTruthy();
  expect(isDate('2022.01.09')).toBeTruthy();
  expect(isDate('2022/01/09')).toBeTruthy();
  expect(isDate('20220109')).toBeFalsy();
  expect(isDate('2022/13/40')).toBeFalsy();
  expect(isDate('helloWorld')).toBeFalsy();
});


test('isIp', () => {
  expect(isIP('192.168.1.10')).toBeTruthy();
  expect(isIP('192.168.299.299')).toBeFalsy();
  expect(isIP('a.d.12312')).toBeFalsy();
});


test('isJSON', () => {
  const jsonString = JSON.stringify({name: 'jack'});
  const jsonErrorString = "{name:_'jack'}";

  expect(isJSON(jsonString)).toBeTruthy();
  expect(isJSON(jsonErrorString)).toBeFalsy();
});


test('objsComposeByKey', () => {
  const testObjs1 = [{id: 1, name: 'imagine'}, {id: 2, name: 'jack'}];
  const testObjs2 = [{id: 1, name: 'imagine'}, {id: 2, name: 'jack'}];
  const testObjs3 = [{id: 1, name: 'imagine'}, {id: 3, name: 'jack'}];

  expect(objsComposeByKey('id', testObjs1, testObjs2)).toBeTruthy();
  expect(objsComposeByKey('name', testObjs1, testObjs3)).toBeTruthy();
});

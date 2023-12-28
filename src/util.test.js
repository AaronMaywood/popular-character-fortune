import { calcBirthNumber, isValidDateFormat } from './util.js';

test('2000-1-1 誕生数4', () => {
	expect(calcBirthNumber(2000,1,1)).toBe(4);
})

test('2000-1-2 誕生数５', () => {
	expect(calcBirthNumber(2000,1,2)).toBe(5);
})

test('2000-1-3 誕生数６', () => {
	expect(calcBirthNumber(2000,1,3)).toBe(6);
})

test('2000-1-4 誕生数７', () => {
	expect(calcBirthNumber(2000,1,4)).toBe(7);
})

test('2000-1-5 誕生数８', () => {
	expect(calcBirthNumber(2000,1,5)).toBe(8);
})

test('2000-1-6 誕生数９', () => {
	expect(calcBirthNumber(2000,1,6)).toBe(9);
})

test('2000-1-7 誕生数１', () => {
	expect(calcBirthNumber(2000,1,7)).toBe(1);
})

test('2000-1-8 誕生数２', () => {
	expect(calcBirthNumber(2000,1,8)).toBe(2);
})

test('2000-1-9 誕生数３', () => {
	expect(calcBirthNumber(2000,1,9)).toBe(3);
})

test('妥当な日付:2000-2-29', () => {
	expect(isValidDateFormat('2000-02-29')).toBe(true);
})

test('妥当でない日付:2001-2-29', () => {
	expect(isValidDateFormat('2001-02-29')).toBe(false);
})

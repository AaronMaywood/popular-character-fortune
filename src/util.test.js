import { calcBirthNumber } from './util.js';

test('2000-1-1', () => {
	expect(calcBirthNumber(2000,1,1)).toBe(4);
})


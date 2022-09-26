jest.setTimeout(4000);

import {DynaLocalStorage} from "../../src";

// Help: https://facebook.github.io/jest/docs/expect.html

describe('Internal module test', () => {
  it('DynaLocalStorage', () => {
    const ls = new DynaLocalStorage();

    const name1 = ls.getItem('name', '-');
    expect(name1).toBe('-');

    ls.setItem('name', 'John');
    expect(ls.getItem('name', '')).toBe('John');

    ls.setItem('age', 32);
    expect(ls.getItem<number>('age', -1)).toBe(32);

    ls.setDate('birthdate', new Date('2012-12-31'));
    expect(ls.getDate('birthdate', new Date).getFullYear()).toBe(2012);
  });
});

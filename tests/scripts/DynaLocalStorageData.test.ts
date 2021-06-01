import "jest";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

import {DynaLocalStorageData} from "../../src"

// help: https://facebook.github.io/jest/docs/expect.html

interface IUser {
  name: string;
  age: number;
}

describe('Internal module test', () => {
  it('DynaLocalStorage', () => {
    const ls = new DynaLocalStorageData<IUser>(
      'ls1',
      {
        name: '',
        age: 0,
      },
    );

    expect(ls.data.name).toBe('');
    expect(ls.data.age).toBe(0);

    ls.data.name = 'John';
    expect(ls.data.name).toBe('John');
    expect(ls.data.age).toBe(0);

    ls.save();
    expect(ls.data.name).toBe('John');
    expect(ls.data.age).toBe(0);

    ls.data.age = 32;
    ls.save();
    expect(ls.data.name).toBe('John');
    expect(ls.data.age).toBe(32);

    ls.data.age = 33;
    expect(ls.data.age).toBe(33);

    ls.reload();
    expect(ls.data.name).toBe('John');
    expect(ls.data.age).toBe(32);

  });
});

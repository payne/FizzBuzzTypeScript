import { FizzBang } from '../src/FizzBang';

describe('FizzBuzz fizzBuzz simple test case', () => {
  it('Should start at 1 by default.', () => {
    const fb = new FizzBang();
    const it = fb.fizzBang();
    expect(it.next().value).toBe(1);
    expect(it.next().value).toBe(2);
    expect(it.next().value).toBe('Fizz');
    expect(it.next().value).toBe(4);
    expect(it.next().value).toBe('Buzz');
    expect(it.next().value).toBe('Fizz');
  });

  it('Can start at 15.', () => {
    const fb = new FizzBang(15);
    const it = fb.fizzBang();
    expect(it.next().value).toBe('FizzBuzz');
  });

});



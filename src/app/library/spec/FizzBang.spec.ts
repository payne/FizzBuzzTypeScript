import { FizzBang } from '../src/FizzBang';

describe('FizzBuzz fizzBuzz simple test case', () => {
  it('Should start at 1 by default.', () => {
    const fb = new FizzBang();
    const it = fb.fizzBang();
    expect(it.next().value.out).toBe(1);
    expect(it.next().value.out).toBe(2);
    const three = it.next().value;
    expect(three.out).toBe('Fizz');
    expect(three.n).toBe(3);
    expect(it.next().value.out).toBe(4);
    expect(it.next().value.out).toBe('Buzz');
    expect(it.next().value.out).toBe('Fizz');
  });

  it('Can start at 15.', () => {
    const fb = new FizzBang(15);
    const it = fb.fizzBang();
    expect(it.next().value.out).toBe('FizzBuzz');
  });
});

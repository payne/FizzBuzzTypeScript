export class FizzBang {
  n = 1;
  public constructor(n = 1) {
    this.n = n;
  }

  public *fizzBang() {
    while (true) {
      let result: any = this.n;
      if (this.n % 3 === 0) {
        result = 'Fizz';
      }
      if (this.n % 5 === 0) {
        if (result === this.n) {
          result = 'Buzz';
        } else {
          result += 'Buzz';
        }
      }
      const retvalue = { out: result, n: this.n };
      this.n++;
      yield retvalue;
    }
  }
}

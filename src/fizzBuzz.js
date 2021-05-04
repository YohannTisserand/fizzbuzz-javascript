class FizzBuzz {
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'FizzBuzz'
    }
    if (this.isDivisibleByThree(number)) {
      return 'Fizz'
    }
    if (this.isDivisibleByFive(number)) {
      return 'Buzz'
    }
    return number;
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
}

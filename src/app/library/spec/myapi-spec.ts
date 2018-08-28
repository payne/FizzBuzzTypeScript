import { MyApi } from '../src/MyApi';

describe('MyApi getName function return value', () => {
  it('Should be defined.', () => {
    const myapi = new MyApi();
    expect(myapi.getName()).toBeDefined('The function getName() should be defined.');
  });

  it('Should return "MyName"', () => {
    const myapi = new MyApi();
    expect(myapi.getName()).toMatch('MyName1');
  });

});

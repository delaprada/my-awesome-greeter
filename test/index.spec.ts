import { Greeter } from '../src/index';

describe('test Greeter', () => {
  it('return hello', () => {
    expect(Greeter('alice')).toBe('Hello alice');
  })
})
import { First } from '../src/task2';
import { Equal, typeCheck } from '../utils';

describe('task2', () => {
  it('case 1', () => {
    typeCheck<Equal<First<[3, 2, 1]>, 3>>();
  });

  it('case 2', () => {
    typeCheck<Equal<First<[() => 123, { a: string }]>, () => 123>>();
  });

  it('case 3', () => {
    typeCheck<Equal<First<[]>, never>>();
  });

  it('case 4', () => {
    typeCheck<Equal<First<[undefined]>, undefined>>();
  });
});

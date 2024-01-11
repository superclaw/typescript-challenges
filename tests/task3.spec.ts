import { Flatten } from '../src/task3';
import { Equal, typeCheck } from '../utils';

describe('task3', () => {
  it('case 1', () => {
    typeCheck<Equal<Flatten<[]>, []>>();
  });

  it('case 2', () => {
    typeCheck<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>();
  });

  it('case 3', () => {
    typeCheck<Equal<Flatten<[1, [2]]>, [1, 2]>>();
  });

  it('case 4', () => {
    typeCheck<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>();
  });

  it('case 5', () => {
    typeCheck<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>();
  });
});

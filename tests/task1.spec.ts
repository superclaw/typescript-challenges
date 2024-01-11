import { HelloWorld } from '../src/task1';
import { Equal, NotAny, typeCheck } from '../utils';

describe('task1', () => {
  it('not any', () => {
    typeCheck<NotAny<HelloWorld>>();
  });

  it('equal', () => {
    typeCheck<Equal<HelloWorld, string>>();
  });
});

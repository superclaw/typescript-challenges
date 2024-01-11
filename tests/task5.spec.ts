import { Diff } from '../src/task5';
import { Equal, typeCheck } from '../utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

describe('task5', () => {
  it('case 1', () => {
    typeCheck<Equal<Diff<Foo, Bar>, { gender: number }>>();
  });

  it('case 2', () => {
    typeCheck<Equal<Diff<Bar, Foo>, { gender: number }>>();
  });

  it('case 3', () => {
    typeCheck<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>();
  });

  it('case 4', () => {
    typeCheck<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>();
  });
});

import { RemoveIndexSignature } from '../src/task4';
import { Equal, typeCheck } from '../utils';

type Foo = {
  [key: string]: unknown;
  foo(): void;
};

type Bar = {
  [key: number]: unknown;
  bar(): void;
  0: string;
};

const foobar = Symbol('foobar');

type FooBar = {
  [key: symbol]: unknown;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

describe('task4', () => {
  it('case 1', () => {
    typeCheck<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>();
  });

  it('case 2', () => {
    typeCheck<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>();
  });

  it('case 3', () => {
    typeCheck<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>();
  });

  it('case 4', () => {
    typeCheck<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>();
  });
});

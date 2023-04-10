import {test, assert, describe, beforeAll, vi, expect} from 'vitest';
import runWarm from '../../src/utils/run-warm';

describe('#runWarm', () => {
  const someMethod = vi.fn();
  let curried: any;

  beforeAll(() => {
    curried = runWarm(someMethod);
  });

  test('curries the function', () => {
    assert.instanceOf(curried, Function);
  });

  test('if executed, runs function', () => {
    const cb = () => {
      return 2;
    };

    curried({}, 2, cb);

    expect(someMethod).toHaveBeenCalledWith({}, 2, cb);
  });

  test('does not execute if called with serverless-plugin-warmup soruce', () => {
    const cb = () => {
      return 4;
    };

    curried({source: 'serverless-plugin-warmup'}, 5, cb);

    expect(someMethod).not.toHaveBeenCalledWith(
      {source: 'serverless-plugin-warmup'},
      5,
      cb,
    );
  });
});

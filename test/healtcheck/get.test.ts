import {test, assert} from 'vitest';
import {handler as healthcheck} from '~/healthcheck/get';

test('returns a 200 response', async () => {
  const result = await healthcheck();

  assert.deepEqual(result, {
    statusCode: 200,
    body: 'page ok',
  });
});

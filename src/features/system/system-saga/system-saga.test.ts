import { expectSaga } from 'redux-saga-test-plan';
import { sagaLogin } from './system-saga';

describe('login', () => {
  test('should login', () => {
    expectSaga(sagaLogin)
      .dispatch({ type: 'system/login', payload: 'test' })
      .put({ type: 'system/login_success', payload: 'test' })
      .run();
  });
});

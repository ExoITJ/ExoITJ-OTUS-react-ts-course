import { PutEffect, take, put, TakeEffect } from '@redux-saga/core/effects';

export const sagaLogin = function* (): Generator<TakeEffect | PutEffect, void, any> {
  const { payload } = yield take('system/login');
  if (payload) {
    yield put({ type: 'system/login_success', payload: payload });
  } else {
    yield put({ type: 'system/login_fail' });
  }
  return;
};

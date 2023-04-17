import {all, call} from 'redux-saga/effects';
import {loginSaga} from '../features/login/loginSaga';

export default function* rootSaga() {
    // Combine all sagas
    yield all([call(loginSaga)]);
}   
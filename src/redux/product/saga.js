import { saveProduct, GET_PRODUCT } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchApi } from "../../api/fetchApi";

export function* getProductSaga(action) {
  try {
    const data = yield call(fetchApi,"products",action);
    yield put(saveProduct(data));
  } catch (err) {
    yield put(err);
  }
}
export function* watchProductSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
}

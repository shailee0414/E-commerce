
import { saveCategory, GET_CATEGORY } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchApi } from "../../api/fetchApi";

export function* getCategorySaga() {
  try {
    const data = yield call(fetchApi,"categories");
    yield put(saveCategory(data));
  } catch (err) {
    yield put(err);
  }
}
export function* watchCategorySaga() {
  yield takeLatest(GET_CATEGORY, getCategorySaga);
}

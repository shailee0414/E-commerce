import { all } from "redux-saga/effects"
import { watchProductSaga } from "./product/saga"
import { watchCategorySaga } from "./category/saga"


function* rootSaga() {
    yield all([watchProductSaga(), watchCategorySaga()])
}
export default rootSaga;
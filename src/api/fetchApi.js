import { put } from "redux-saga/effects";

export function* fetchApi(endPoint, action) {

    let url = `https://dummyjson.com/products`;
    if (endPoint === "products" && action?.payload?.type === "name") {
        url = `${url}/search?q=${action?.payload?.value}`
    }
    else if (endPoint === "products" && action?.payload?.type === "category") {
        url = `${url}/category/${action?.payload?.value}`
    }

    else if (endPoint === "categories") {
        url = `${url}/categories`
    }
    else {
        url = `${url}?limit=8&skip=${action?.payload?.skip}`
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";
    try {
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const data = yield response.json();
        return data
    }
    catch (err) {
        console.log(err)
        yield put({ type: "ERROR", payload: err });

    }

}


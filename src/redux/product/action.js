export const GET_PRODUCT = "GET_PRODUCT";
export const SAVE_PRODUCT = "SAVE_PRODUCT";

export const getProduct = (product) => ({
    type: GET_PRODUCT,
    payload: product,
});

export const saveProduct = (product) => ({
    type: SAVE_PRODUCT,
    payload: product,
});
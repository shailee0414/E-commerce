export const GET_CATEGORY = "GET_CATEGORY";
export const SAVE_CATEGORY = "SAVE_CATEGORY";

export const getCategory = (category) => ({
    type: GET_CATEGORY,
    payload: category,
});

export const saveCategory = (category) => ({
    type: SAVE_CATEGORY,
    payload: category,
});
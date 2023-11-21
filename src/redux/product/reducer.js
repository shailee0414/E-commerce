import { SAVE_PRODUCT,GET_PRODUCT } from "./action";
const initialState = [];

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCT:
            return payload;
        case SAVE_PRODUCT:
            return payload;
        default:
            return state;
    }
};
export default productReducer;
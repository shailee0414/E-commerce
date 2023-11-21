import { SAVE_CATEGORY ,GET_CATEGORY} from "./action";
const initialState = [];

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CATEGORY:
            return payload;
        case SAVE_CATEGORY:
            return [...payload];
        default:
            return state;
    }
};
export default categoryReducer;
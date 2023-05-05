import { Types } from './Types'
const items = [];
const quantity = 0;
export const reducerGetItem = (state = items, { type }) => {
    switch (type) {
        case Types.GET_ITEMS: {
            return state;
        }
        default: return state;
    }
}
export const reducerSetQuntity = (state = quantity, { type, payload }) => {
    switch (type) {
        case Types.SET_QUANTITY: {
            if (payload === '+') state += 1;
            else if (payload === '-') {
                if (state > 0) state -= 1;
            }
            return state;
        }
        default: return state;
    }
}
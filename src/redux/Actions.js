import { Types } from './Types'

export const getItems = () => {
    return {
        type: Types.GET_ITEMS,
    }
}
export const setQuntity = (payload) => {
    return {
        type: Types.SET_QUANTITY,
        payload: payload,
    }
}
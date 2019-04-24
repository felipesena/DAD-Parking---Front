import {IS_AUTHENTICATED} from '../types.js';

const getters = {
    [types.IS_AUTHENTICATED]: (state) => {
        return !!state.user.id;
    }
}

export default getters;
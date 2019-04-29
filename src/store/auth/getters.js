import { IS_AUTHENTICATED } from '../types.js';

const getters = {
    [IS_AUTHENTICATED]: (state) => {
        return !!state.user.id;
    }
}

export default getters;
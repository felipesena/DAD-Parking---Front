import { TARIFAS } from '../types.js'

const getters = {
    [TARIFAS]: (state) => {
        return state.tarifas;
    }
}

export default getters;
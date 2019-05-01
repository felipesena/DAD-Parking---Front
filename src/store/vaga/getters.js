import { VAGAS } from '../types.js'

const getters = {
    [VAGAS]: (state) => {
        return state.vagas;
    }
}

export default getters;
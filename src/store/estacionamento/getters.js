import { ESTACIONAMENTOS } from '../types.js';

const getters = {
    [ESTACIONAMENTOS]: (state) => {
        return state.estacionamentos;
    }
}

export default getters;
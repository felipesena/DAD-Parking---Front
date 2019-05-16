import { CLIENTES } from '../types.js';

const getters = {
    [CLIENTES]: (state) => {
        return state.clientes;
    }
};

export default getters;
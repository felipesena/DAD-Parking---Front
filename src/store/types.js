/* ----- AUTH ----- */

// Auth Actions
export const LOGOUT = 'auth/LOGOUT';
export const REGISTER_USER = 'auth/REGISTER_USER';
export const INITIAL_LOAD = 'auth/INITIAL_LOAD';
export const LOGIN_INTO_SERVER = 'auth/LOGIN_INTO_SERVER';

// Auth Mutations
export const CURRENT_USER_FETCHED = 'auth/CURRENT_USER_FETCHED';
export const DISPATCH_CURRENT_USER = 'auth/DISPATCH_CURRENT_USER';

// Auth Getters
export const IS_AUTHENTICATED = 'auth/IS_AUTHENTICATED';

/* ----- CLIENTE ----- */

// Cliente Actions
// Cliente Mutations
// Cliente Getters

/* ----- Estacionamento ----- */

// Estacionamento Actions
export const GET_ALL_ESTACIONAMENTOS = 'estacionamento/GET_ALL_ESTACIONAMENTOS';
export const CREATE_ESTACIONAMENTO = 'estacionamento/CREATE_ESTACIONAMENTO';
export const UPDATE_ESTACIONAMENTO = 'estacionamento/UPDATE_ESTACIONAMENTO';
export const DELETE_ESTACIONAMENTO = 'estacionamento/DELETE_ESTACIONAMENTO';

// Estacionamento Mutations
export const ON_GET_ESTACIONAMENTOS = 'estacionamento/ON_GET_ESTACIONAMENTOS';
export const ON_CREATE_ESTACIONAMENTO = 'estacionamento/ON_CREATE_ESTACIONAMENTO';
export const ON_DELETE_ESTACIONAMENTO = 'estacionamento/ON_DELETE_ESTACIONAMENTO';
export const ON_UPDATE_ESTACIONAMENTO = 'estacionamento/ON_UPDATE_ESTACIONAMENTO';

// Estacionamento Getters
export const ESTACIONAMENTOS = 'estacionamento/ESTACIONAMENTOS';

/* ----- Tarifa ----- */

// Tarifa Actions
// Tarifa Mutations
// Tarifa Getters

/* ----- Vaga ----- */

// Vaga Actions
export const GET_ALL_VAGAS = 'vaga/GET_ALL_VAGAS';
export const CREATE_VAGA = 'vaga/CREATE_VAGA';
export const UPDATE_VAGA = 'vaga/UPDATE_VAGA';
export const DELETE_VAGA = 'vaga/DELETE_VAGA';

// Vaga Mutations
export const ON_GET_VAGAS = 'vaga/ON_GET_VAGAS';
export const ON_CREATE_VAGA = 'vaga/ON_CREATE_VAGA';
export const ON_DELETE_VAGA = 'vaga/ON_DELETE_VAGA';
export const ON_UPDATE_VAGA = 'vaga/ON_UPDATE_VAGA';

// Vaga Getters
export const VAGAS = 'vaga/VAGAS';

/* ----- Vinculo ----- */

// Vinculo Actions
export const GET_ALL_VINCULOS = 'vinculo/GET_ALL_VINCULOS';
export const CREATE_VINCULO = 'vinculo/CREATE_VINCULO';
export const UPDATE_VINCULO = 'vinculo/UPDATE_VINCULO';
export const GET_VALOR_TOTAL = 'vinculo/GET_VALOR_TOTAL';

// Vinculo Mutations
export const ON_GET_VINCULO = 'vinculo/ON_GET_VAGAS';
export const ON_CREATE_VINCULO = 'vinculo/ON_CREATE_VINCULO';
export const ON_DELETE_VINCULO = 'vinculo/ON_DELETE_VINCULO';
export const ON_UPDATE_VINCULO = 'vinculo/ON_UPDATE_VINCULO';

// Vinculo Getters
export const VINCULOS = 'vinculo/VINCULOS';
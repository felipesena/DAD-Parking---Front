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
// Estacionamento Mutations
// Estacionamento Getters


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
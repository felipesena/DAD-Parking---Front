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
export const GET_ALL_CLIENTES = 'cliente/GET_ALL_CLIENTES';
export const CREATE_CLIENTE = 'cliente/CREATE_CLIENTE';
export const UPDATE_CLIENTE = 'cliente/UPDATE_CLIENTE';
export const DELETE_CLIENTE = 'cliente/DELETE_CLIENTE';

// Cliente Mutations
export const ON_GET_CLIENTES = 'cliente/ON_GET_CLIENTES';
export const ON_CREATE_CLIENTE = 'cliente/ON_CREATE_CLIENTE';
export const ON_DELETE_CLIENTE = 'cliente/ON_DELETE_CLIENTE';
export const ON_UPDATE_CLIENTE = 'cliente/ON_UPDATE_CLIENTE';

// Cliente Getters
export const CLIENTES = 'cliente/CLIENTES';

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
export const GET_ALL_TARIFAS = 'tarifa/GET_ALL_TARIFAS';
export const CREATE_TARIFA = 'tarifa/CREATE_TARIFA';
export const UPDATE_TARIFA = 'tarifa/UPDATE_TARIFA';
export const DELETE_TARIFA = 'tarifa/DELETE_TARIFA';

// Tarifa Mutations
export const ON_GET_TARIFAS = 'tarifa/ON_GET_TARIFAS';
export const ON_CREATE_TARIFA = 'tarifa/ON_CREATE_TARIFA';
export const ON_DELETE_TARIFA = 'tarifa/ON_DELETE_TARIFA';
export const ON_UPDATE_TARIFA = 'tarifa/ON_UPDATE_TARIFA';

// Tarifa Getters
export const TARIFAS = 'tarifa/TARIFAS';

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
export const ON_UPDATE_VINCULO = 'vinculo/ON_UPDATE_VINCULO';
export const ON_GET_VALOR_TOTAL = 'vinculo/ON_GET_VALOR_TOTAL';

// Vinculo Getters
export const VINCULOS = 'vinculo/VINCULOS';
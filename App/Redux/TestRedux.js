import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addValue: null,
  reduceValue: null,
  testRequest: ['data'],
  testSuccess: ['payload'],
  testFailure: null
})

export const TestTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  value: 3
})

/* ------------- Selectors ------------- */

export const TestSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const addValue = (state) => {
  return {
    value: state.value + 1
  }
}

export const reduceValue = (state) => {
  return {
    value: state.value - 1
  }
}

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TEST_REQUEST]: request,
  [Types.TEST_SUCCESS]: success,
  [Types.TEST_FAILURE]: failure,
  [Types.ADD_VALUE]: addValue,
  [Types.REDUCE_VALUE]: reduceValue,
})

import * as types from './constants'

export const getStatus = () => ({
  type: types.GET_STATUS,
})

export const saveStatus = (status) => ({
  type: types.SAVE_STATUS,
  payload: status,
})
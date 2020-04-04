import {
  TOGGLE_COLLAPSE,
} from './actions'

export const initialState = {
  pinRequired: true,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      }

    default:
      throw new Error(`Action ${action.type} not handled by reducer`)
  }
}
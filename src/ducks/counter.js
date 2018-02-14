export const INCREMENT = 'INCREMENT'

export const increment = _ => ({
  type: INCREMENT
})

export const initialState = {
  count: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

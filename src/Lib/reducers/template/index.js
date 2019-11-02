const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 }
    }
    case "decrement": {
      return { count: state.count - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer;

const initialState = {
  items: [],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      }
    case "count/decrement":
      return {
        ...state,
        items: state.items.concat(state.items.length - 1),
      };
    default:
      console.log("Initial state.items length %s", state.items.length);
      return state;
  }
}

export default counterReducer;

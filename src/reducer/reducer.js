const initialState = {
  page: "Home",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export default reducer;

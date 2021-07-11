const initialState = {
  page: "HOME",
  showNav: false,
  show:"all"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PAGE":
      return { ...state, page: action.payload };
    case "SHOW_NAV":
      return { ...state, showNav: action.payload };
    case "SHOW":
      return { ...state, show: action.payload };
    default:
      return state;
  }
}

export default reducer;

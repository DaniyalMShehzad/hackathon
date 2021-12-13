const INITIAL_STATE = {
    label: "userid Data Here",
    userid: false
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "USERIDDATA":
  // console.log(action.payload);
        state.userid = action.payload;
        return state;
      default:
        return state;
    }
  };
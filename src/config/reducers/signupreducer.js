const INITIAL_STATE = {
  label: "signup Reducer Here",
   userid:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUPDATA":
console.log(action.payload);
      action.uid = state.signupreducer.uid;
      return state.signupreducer;
    default:
      return state;
  }
};

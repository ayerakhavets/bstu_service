
const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'LOG_IN':
    console.log('==== LOG');
    return state;
  default:
    return state;
  }
};

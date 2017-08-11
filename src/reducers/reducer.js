const initialState = {
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log('UKNOWN ACTION TYPE!');
      return state;
  }
}

export default reducer;

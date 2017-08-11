const initialState = {
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGES':
      return uploadImages(state, action);
    default:
      console.log('ACTION:', action);
      console.log('STATE:', state);
      console.log('UKNOWN ACTION TYPE!');
      return state;
  }
}

const uploadImages = (state, action) => {
  let newState = Object.assign({}, state);
  console.log(state);
  fetch('http://localhost:9000/images', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      images: action.images
    })
  });
  return newState;
}

export default reducer;

const initialState = {
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
      return uploadImage(state, action);
    default:
      console.log('ACTION:', action);
      console.log('STATE:', state);
      console.log('UKNOWN ACTION TYPE!');
      return state;
  }
}

const uploadImage = (state, action) => {
  let newState = Object.assign({}, state);
  console.log(action.image);
  console.log(state);
  fetch('/images', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: action.image
    })
  });
  return newState;
}

export default reducer;


const initialState = {
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      console.log('Initializing...');
      return state;
    case 'UPLOAD_IMAGE':
      return uploadImage(state, action);
    case 'SET_IMAGES':
      return setImages(state, action);
    default:
      console.log('ACTION:', action);
      console.log('STATE:', state);
      console.log('UKNOWN ACTION TYPE!');
      return state;
  }
}

const setImages = (state, action) => {
  let newState = Object.assign({}, state);
  newState.images = action.images;
  return newState;
}

const uploadImage = (state, action) => {
  let newState = Object.assign({}, state);
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

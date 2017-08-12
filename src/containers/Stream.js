import { connect } from 'react-redux';

import Stream from '../components/Stream';
import { uploadImage } from '../actions/Stream';

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceiveImage: (image) => {
      dispatch(uploadImage(image));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);

import { connect } from 'react-redux';

import Stream from '../components/Stream';
import { uploadImages } from '../actions/Stream';

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceiveImages: (images) => {
      dispatch(uploadImages(images));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);

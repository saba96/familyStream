import { connect } from 'react-redux';
import {imageStreaming, videoStreaming} from '../actions/App'
import App from '../components/App';


const mapStateToProps = (state) => {
    return {
        view : state.view,
        images : state.images
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        imageStreaming: () => dispatch(imageStreaming()),
        videoStreaming: () => dispatch(videoStreaming()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
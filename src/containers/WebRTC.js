import SimpleWebRTC from 'simplewebrtc'
import freeice from 'freeice'

import {createConstants, createReducer} from 'redux-module-builder'

// export const types = createConstants('webrtc')();
export const reducer = createReducer({  
	[types.CONNECTION_READY]: (state, {payload}) => ({
	...state,
	ready: true,
	id: payload
})});
export const initialState = {
	ready: false
}


export const types = createConstants('webrtc')(
	//call init() when we want to start listening for wrbRTC event
	'INIT',
	//fires when the signaling connection emits a connect event
	'CONNECTION_READY'
);

export const actions = {  
	init: (cfg) => (dispatch, getState) => {
		rtc = new SimpleWebRTC({
			url: ___TURN_SERVER__,
			//The freeice() function returns back a randomized STUN/TURN server from a list of publicly available, free servers.
			peerConnectionConfig: freeice()
		})
			//When we receive a connectionReady event along with a unique connection id, we'll dispatch a redux event that indicates.
			.on('connectionReady', (id) => {
				dispatch({
					type: types.CONNECTION_READY,
					payload: id
				})
			})
	}
}


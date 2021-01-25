const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';


let initialState = {
	dialogs: [
		{
			name: 'Dimych',
			id: 1,
		},
		{
			name: 'Sasha',
			id: 2,
		},
		{
			name: 'Misha',
			id: 3,
		}
	],
	messages: [
		{
			message: 'Hi',
			id: 1,
		},
		{
			message: 'What s up',
			id: 2,
		},
		{
			message: 'Hwkejflwkejflwkme lkDJSJFLQK WLSDKJ',
			id: 3,
		}
	],
	newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {

	switch(action.type){
		case UPDATE_NEW_MESSAGE_BODY: {
			let stateCopy = {...state}
			stateCopy.newMessageBody = action.body;
			return stateCopy;
		}
		case SEND_MESSAGE: {
			let state
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push(
				{
					message: body,
					id: 4,
				});
			return state;
		}
		default:
			return state;
	}			

};

export const sendMessageActionCreator = () => {
	return {
		type: SEND_MESSAGE
	}
}

export const updateNewMessageBodyActionCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
}


export default dialogsReducer;
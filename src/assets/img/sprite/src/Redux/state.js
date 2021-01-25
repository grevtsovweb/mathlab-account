import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navbarReducer from './navbar-reducer';


let store = {
	_state: {
		dialogsPage: {
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
		},
		profilePage: {
			postData: [
				{
					message: 'Ку-ку, епта!',
					id: 1,
					likesCount: 12
				},
				{
					message: 'Здорова!',
					id: 2,
					likesCount: 2
				}
			],
			postValue: 'Hello, motherfucker!'
		},
		navbar: {

		}		
	},
	_callSubscriber() {
		console.log('state changed');
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.navbar = navbarReducer(this._state.navbar, action);

		this._callSubscriber(this._state);
		

	}
	
}






window.store = store;


export default store;

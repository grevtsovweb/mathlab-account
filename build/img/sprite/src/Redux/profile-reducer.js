import {usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
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
	postValue: 'Hello, motherfucker!',
	profile: null
}

const profileReducer = (state = initialState, action) => {


	switch(action.type) {
		case ADD_POST: {
			let newPost = {
				message: state.postValue,
				id: 3,
				likesCount: 33
			};
			let stateCopy = {...state};
			stateCopy.postData = [...state.postData]
			stateCopy.postData.push(newPost);
			stateCopy.postValue = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT:{
			let stateCopy = {...state};
			stateCopy.postValue = action.text;
			return stateCopy;
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		default:
			return state;
	
	}

	
};

export const addPostActionCreator = () => {
	
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		text: text
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

// this.props.match.params.userID

export const setUser = (userId) => {
	return (dispatch) => {
		
		let userID = userId;

        if(!userID){
            userID = 2;
        }

        usersAPI.setProfile(userID).then(data => {
            dispatch(setUserProfile(data))           
        })
	}
}

export default profileReducer;
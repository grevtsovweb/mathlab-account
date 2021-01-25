import {usersAPI} from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_PAGE ='SET_PAGE';
const SET_TOTAL ='SET_TOTAL';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
	users: [],
	pageSize: 6,
	totalUsersCount: 18,
	currentPage: 1,
	isFetching: true
	}

const userReducer = (state = initialState, action) => {

	switch(action.type) {
		case FOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if(u.id === action.userID) {
						return {...u, followed: true}
					}
					return u
				})
			}
		case UNFOLLOW:
			
			return {
				...state, 
				users: state.users.map(u => {
					if(u.id === action.userID) {
						return {...u, followed: false}
					}
					return u
				})
			}
		case SET_USERS: {
			return {...state, users: action.users}
		}

		case SET_PAGE: {
			return {...state, currentPage: action.page}
		}

		case SET_TOTAL: {
			return {...state, totalUsersCount: action.totalUsersCount}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}



		default:
			return state;
	
	}

	
};

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersPage = (page) => ({type: SET_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL, totalUsersCount: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })



export const getUsers = (currentPage, pageSize) => {

	return (dispatch) => {
		
		dispatch(toggleIsFetching(true))

		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))  
			dispatch(setTotalUsersCount(data.totalCount))    
		})
	}
}

export const unfollow = (userId) => {

	return (dispatch) => {
		
		usersAPI.unfollow(userId)
			.then(data => {
				if(data.data.resultCode == 0) {
					dispatch(unfollowSuccess(userId))
				}      
			})
		
		dispatch(unfollowSuccess(userId))
	}
}


export const follow = (userId) => {

	return (dispatch) => {
		
		usersAPI.follow(userId)
			.then(data => {
				if(data.resultCode == 0) {
					dispatch(followSuccess(userId))
				}      
			})
		
		dispatch(followSuccess(userId))
	}
}




export default userReducer;
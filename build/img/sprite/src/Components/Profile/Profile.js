import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {

	return (
		<div className='profile'>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer store={props.store} />
	  	</div>
  );
};

export default Profile;
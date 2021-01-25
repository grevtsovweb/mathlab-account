import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
    if (!props.profile){
        return <Preloader />
    }

 
    return (
        <>
            <div>
			  <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
			</div>
			<div>
                
            <img src={props.profile.photos.large}/>
                <h3>{props.profile.fullName}</h3>
			  <ProfileStatus status={"Hello, friends"}/>
		    </div>
        </>
    )
}

export default ProfileInfo

import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import * as axios from 'axios'
import {setUser} from '../../Redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    
    componentDidMount(){

        this.props.setUser(this.props.match.params.userID)
        // if(!userID){
        //     userID = 2;
        // }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
        //     debugger
        //     this.props.setUserProfile(response.data)            
        // })
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithURLDataContainercomponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUser})(WithURLDataContainercomponent) 

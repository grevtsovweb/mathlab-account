import React from 'react'
import { connect } from 'react-redux'
import {follow, unfollow, setUsersPage, getUsers} from '../../Redux/users-reducer';
import Users from './UsersC'
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api'

class UsersApiContainer extends React.Component {
    
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)  
        //     this.props.setUsers(data.items)   
        //     this.props.setTotalUsersCount(data.totalCount)      
        // })
    }

    handlePageChange = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        
        
        
        // this.props.setUsersPage(pageNumber);

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)  
        //     this.props.setUsers(data.items)           
        // })
    }

    render() {
        return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount    = { this.props.totalUsersCount }
                      pageSize           = { this.props.pageSize }
                      onPageChange       = { this.handlePageChange }
                      users              = { this.props.users}
                      currentPage        = { this.props.currentPage}
                      follow             = {this.props.follow}
                      unfollow           = {this.props.unfollow}
                      setUsers           = {this.props.setUsers}
                      setPage            = {this.props.setUsersPage}
                      setTotalUsersCount = {this.props.setTotalUsersCount}
                />
            </>
    }
}



// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followActionCreator(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowActionCreator(userID))
//         },
//         setUsers: (userID) => {
//             dispatch(setUsersActionCreator(userID))
//         },
//         setPage: (page) => {
//             dispatch(setUsersPageAC(page))
//         },
//         setTotalUsersCount: (totalcount) => {
//             dispatch(setUsersTotalCountAC(totalcount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsersPage,
    getUsers
    }
)(UsersApiContainer)

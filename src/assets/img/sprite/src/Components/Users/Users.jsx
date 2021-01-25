import React from 'react'
import userIcon from '../../assets/images/user.png'
import * as axios from 'axios'
import { NavLink } from 'react-router-dom'

function Users(props) {

    let getUsers = () => {
        if(props.users.length === 0) {
     
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    
    
    return (
        
        <div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile' + u.id}>
                    <div style={{width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={u.photos.small != null ? u.photos.small : userIcon} alt="" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                    </div>
                    </NavLink>
                    <div>
                        {u.followed ? <button onClick={() => {
                            

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "4c8ab6e0-2ea0-44fa-bd4c-98f9791c05ce"
                                }
                            }).then(response => {
                                if(response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }      
                            })
                            
                            props.unfollow(u.id)
                            
                            }}>Unfollow</button> 
                            
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "4c8ab6e0-2ea0-44fa-bd4c-98f9791c05ce"
                                    }
                                }).then(response => {
                                    if(response.data.resultCode == 0) {
                                        console
                                        props.follow(u.id)
                                    }    
                                })
                                
                                
                                }}>Follow</button>}  
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                   <span>
                        <div>{'u.location.country'}</div>
                       <div>{'u.location.city'}</div>
                   </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users

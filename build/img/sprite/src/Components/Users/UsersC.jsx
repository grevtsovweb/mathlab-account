import React from 'react'
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/user.png'
import styles from './User.module.css'
import * as axios from 'axios'
import { usersAPI } from '../../api/api';

function UsersC(props) {
    


        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }


        return (
            
        <div>
            {pages.map((page, index) => {
                return <span className={props.currentPage === page ? styles.user__item_selected : ''} key={index} onClick={() => props.onPageChange(page)}>{page}</span>
            })}
            
            {props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id}>
                        <div style={{width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={u.photos.small != null ? u.photos.small : userIcon} alt="" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                        </div>
                    </NavLink>
                    <div>
                        {u.followed 
                        
                            ? <button onClick={() => {
                            
                                props.unfollow(u.id)}}>Unfollow</button> 
                            
                            : <button onClick={() => {
                                
                                props.follow(u.id)}}>Follow</button>}  
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



export default UsersC

import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a4b7d391-9392-4801-81e1-ed0f83a47d57"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, 
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    setProfile(userID){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            return response.data
        })
    }
    
}
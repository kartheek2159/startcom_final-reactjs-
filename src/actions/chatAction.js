import * as chatApi from '../API/ChatRequests';


export const createChat = (id, userId)=> async()=> {
    // dispatch({type: "FOLLOW_USER", data: id})
    // dispatch({type: "FOLLOWER_USER", data: id})
    chatApi.createChat({senderId:id,receiverId:userId})
}
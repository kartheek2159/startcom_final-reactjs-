import * as UserApi from "../API/userRequest";


export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        // console.log("in cactio")
        // console.log(id)
        // console.log(formData)
        console.log(formData)
        const {data} = await UserApi.updateUser(id, formData);
        // console.log(data)
        // console.log(data)
        // console.log("Action ko receive hoa hy ye : ",data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}


export const followUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_USER", data: id})
    // dispatch({type: "FOLLOWER_USER", data: id})
    UserApi.followUser(id, data)
}

export const unfollowUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER", data: id})
    // dispatch({type: "UNFOLLOWER_USER", data: id})
    UserApi.unfollowUser(id, data)
}

export const getUser=(id)=>async()=>{
    const {data} = await UserApi.getUser(id);
    console.log(data);

}
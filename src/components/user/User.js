import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createChat } from '../../actions/chatAction'
import { followUser ,unfollowUser} from '../../actions/userAction'

const User = ({person}) => {
    const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData);
    // console.log(user)
    const dispatch =useDispatch();
    const [following, setFollowing] = useState(
      person.followers.includes(user._id)
    );
    // console.log(person.followers.includes(user._id))
    console.log(person)
    const handleFollow = (e) => {
      if (following) {
        dispatch(unfollowUser(person._id, user));
      } else {
        dispatch(followUser(person._id, user));
        dispatch(createChat(person._id, user._id));
      }
      setFollowing((prev) => !prev);
      
    };
    
  return (
    <div>
      <div className='follower'>
                        <div>
                            <img src={person.coverPicture?serverPublic+person.coverPicture:serverPublic+"defaultProfile.png"} alt="" className='followerImg'/>
                            <div className='name'>
                                <span>{person.firstname}</span>
                                <span>{person.username}</span>
                                
                            </div>
                        </div>
                        <button className='button' onClick={handleFollow}>{following?"UnFollow":"Follow"}</button>
                    </div>
    </div>
  )
}

export default User
import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//get all users

export const getAllUser=async(req,res)=>{
    try {
        let users=await UserModel.find();

        users=users.map((user)=>{
            const {password,...otherDetails}=user._doc
            return otherDetails;
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get User
export const getUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await UserModel.findById(id);
        if(user){
            const {password,...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user")
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//Delete User

export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const {currentUserId,currentUserAdminStatus}=req.body;
    console.log(currentUserAdminStatus)
   
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted Successfully")
        } catch (error) {
            res.status(500).json(error);
            
        }
}



//Follow user

export const followUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;
  
  if (_id == id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("you are already following this id");
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  }
};

// Unfollow a User
// changed
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;

  if(_id == id)
  {
    res.status(403).json("Action Forbidden")
  }
  else{
    try {
      const unFollowUser = await UserModel.findById(id)
      const unFollowingUser = await UserModel.findById(_id)


      if (unFollowUser.followers.includes(_id))
      {
        await unFollowUser.updateOne({$pull : {followers: _id}})
        await unFollowingUser.updateOne({$pull : {following: id}})
        res.status(200).json("Unfollowed Successfully!")
      }
      else{
        res.status(403).json("You are not following this User")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
};
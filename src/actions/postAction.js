
import * as PostsApi from "../API/postRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deletePosts=(id,userId,desc)=>async()=>{
  try {
    await PostsApi.deletePost(id,userId,desc)
  } catch (error) {
    console.log(error)
  }
}
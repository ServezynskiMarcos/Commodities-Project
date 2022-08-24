import { getAllPosts, getPosts, filteredSubcategory, getUserPosts } from "../Slices/postsSlice";
import { getAllUsers } from "../Slices/usersSlice";
import { getCategories } from "../Slices/categoriesSlice";
import axios from 'axios';

// FUNCTIONS POSTS

export const getPost = ()=>(dispatch)=>{
  axios('https://b2b-01.herokuapp.com/posts') // end-point del back /posts
  .then(data => dispatch(getAllPosts(data.data)))
  .catch(e=>console.log(e))
}

export const searchPosts = (name,sell) =>(dispatch)=>{
  dispatch(getPosts(name,sell))
}

export const userPosts = () =>(dispatch)=>{
  axios('/posts') // end-point del back /posts
  .then(data => dispatch(getUserPosts(data.data)))}

// FUNCTIONS CATEGORIES

export const getCategoriesByName = () => (dispatch) => {
  axios('http://localhost:3000/category')
  .then(resp => dispatch(getCategories(resp.data)))
}

// FILTERS SUBCATEGORY 

// export const filterBySubcategory = (value) => (dispatch)=>{
//   dispatch(filteredSubcategory(value))
// }


// FUNCTIONS USERS

export const getUser = ()=>(dispatch)=>{
  axios('https://rickandmortyapi.com/api/character') // end-point del back /users
  .then(data=>dispatch(getAllUsers(data.data.results)))
  .catch(e=>console.log(e))
}

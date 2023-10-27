import axios from "axios";

const url = "http://localhost:3000";

export const createBlog = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};
export const createQuestion = async (question) => {
  try {
    return await axios.post("/api/question", question);
  } catch (error) {
    console.log("Error while calling createQuestion API ", error);
  }
};

export const getAllQuestions = async () => {
  try {
    let response = await axios.get("/api/question");
    return response.data.reverse();
  } catch (error) {
    console.log("Error while calling getallquestions API ", error);
  }
};

export const getAllBlogs = async (param) => {
  try {
    let response = await axios.get(`${url}/posts${param}`);
    return response.data.reverse();
  } catch (error) {
    console.log("Error while calling getPosts API ", error);
  }
};

export const getBlog = async (id) => {
  try {
    let response = await axios.get(`${url}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};

export const updateBlog = async (id, post) => {
  try {
    return await axios.put(`${url}/update/${id}`, post);
  } catch (error) {
    console.log("Error while calling updatePost API ", error);
  }
};

export const deleteBlog = async (id) => {
  try {
    return await axios.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API ", error);
  }
};

export const newComment = async (comment) => {
  try {
    return await axios.post(`${url}/comment/new/`, comment);
  } catch (error) {
    console.log("Error while calling newComment API ", error);
  }
};

export const getComments = async (id) => {
  try {
    let response = await axios.get(`${url}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API ", error);
  }
};

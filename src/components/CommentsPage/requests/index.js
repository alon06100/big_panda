import axios from 'axios';

export const submitComment = (e, email, message, comments, setCommentList) => {
  e.preventDefault();
  axios.post('/api/comment', {
    email,
    message,
  })
    .then((result) => {
      const commentList = [...comments];
      commentList.push(result.data);
      setCommentList(commentList);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getComments = (email = '', setCommentList) => {
  axios.get(`/api/comment?email=${email}`)
    .then((response) => {
      setCommentList(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserDetails = (email = '', setSelectedUser) => {
  axios.get(`/api/comment/recent?email=${email}`)
    .then((response) => {
      setSelectedUser(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

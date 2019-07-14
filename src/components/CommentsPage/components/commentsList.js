import React from 'react';
import { getUserDetails } from '../requests';
import Gravatar from '../../common/Gravatar';

const CommentsList = ({ comments, toggleModal, setSelectedUser }) => {
  const openModal = (email) => {
    toggleModal(true);
    getUserDetails(email, setSelectedUser);
  };
  return (
    comments.map((comment) => {
      const { _id, email } = comment;
      return (
        <div key={_id} className="comment">
          <div className="avatar-wrapper" onClick={() => openModal(email)}><Gravatar email={email} /></div>
          <div className="comment-text-wrapper">
            <div className="email-field">{comment.email}</div>
            <div className="message-field">{comment.message}</div>
          </div>
        </div>
      );
    })
  );
};

export default CommentsList;

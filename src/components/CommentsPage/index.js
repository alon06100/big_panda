import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import Modal from '../common/Modal';
import UserDetails from './components/userDetails';
import CommentsList from './components/commentsList';
import Form from './components/form';
import SearchInput from '../common/SearchInput';
import { getComments } from './requests';
import './style.scss';

const CommentsPage = () => {
  const [comments, setCommentList] = useState([]);
  const [filter, setFilter] = useState('');
  const [isModalOpen, toggleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const debounceSearch = useCallback(debounce((value) => { getComments(value, setCommentList); }, 500), []);

  useEffect(() => {
    getComments('', setCommentList);
  }, []);

  const filterUserChange = (e) => {
    debounceSearch(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div id="app-container">
      <Modal
        closeModal={() => toggleModal(false)}
        isModalOpen={isModalOpen}
      >
        <UserDetails selectedUser={selectedUser} />
      </Modal>
      <div id="comments-page-conatiner">
        <div id="form-section">
          <Form setCommentList={setCommentList} comments={comments} />
        </div>
        <div id="comments-section">
          <SearchInput filter={filter} handleChange={filterUserChange} />
          <div id="comments-wrapper">
            <CommentsList
              comments={comments}
              toggleModal={toggleModal}
              setSelectedUser={setSelectedUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;

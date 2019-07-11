import React from 'react';
import moment from 'moment';
import Gravatar from '../../common/Gravatar';

const UserDetails = ({ selectedUser }) => {
  const { dateCreated, email } = selectedUser;
  const date = moment(dateCreated).format('MM/DD/YYYY , hh:mm A');
  return (
    <div id="user-details-container">
      <Gravatar email={email} />
      <div id="user-text-container">
        <div id="email">{email}</div>
        <div id="last-seen">{`Seen: ${date}`}</div>
      </div>
    </div>
  );
};

export default UserDetails;

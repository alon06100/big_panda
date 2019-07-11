import React from 'react';
import md5 from 'md5';

const Gravatar = ({ email }) => {
  const hash = email ? md5(email, { encoding: 'binary' }) : '';
  return <img src={`https://www.gravatar.com/avatar/${hash}`} alt="avatar" />;
};

export default Gravatar;

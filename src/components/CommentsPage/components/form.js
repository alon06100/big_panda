import React, { useState } from 'react';
import { submitComment } from '../requests';

const Form = ({ setCommentList, comments }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <form onSubmit={e => submitComment(e, email, message, comments, setCommentList)}>
      <input className="no-focus" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" />
      <textarea className="no-focus" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;

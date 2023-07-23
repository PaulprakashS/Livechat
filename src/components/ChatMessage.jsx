import React from 'react';

const ChatMessage = ({text,logo,email,user ,name}) => {
  return (
    <div>
     {
      user.email ==email ? (
        <div className='d-flex justify-content-end right-content'>
           <div className='message-name'>{name}</div>
        <span className='message-right'>
          <span className='message-text'>{text}</span>
          <img src={logo} alt='logo' className='logo-icon'/>
        </span>
        </div>
        
       ) : (
        <span className='message-left d-flex'>
          <img src={logo} alt='logo' className='logo-icon'/>
          <span className='message-text'>{text}</span>
        </span>

       )
     }
    </div>
  )
}

export default ChatMessage;

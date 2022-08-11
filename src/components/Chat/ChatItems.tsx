import React from 'react';

interface ChatItemsProps {
  userName: string;
  text: string;
}

const ChatItems: React.FC<ChatItemsProps> = ({ userName, text }) => {
  return (
    <div className="chat__item">
      <b>{userName}</b>
      <div>{text}</div>
    </div>
  );
};

export default ChatItems;

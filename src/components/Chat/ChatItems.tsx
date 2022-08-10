import React from 'react';

interface ChatItemsProps {
  name: string;
  text: string;
}

const ChatItems: React.FC<ChatItemsProps> = ({ name, text }) => {
  return (
    <div className="chat__item">
      <b>{name}</b>
      <div>{text}</div>
    </div>
  );
};

export default ChatItems;

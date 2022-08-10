import React from 'react';
import ChatItems from './ChatItems';

interface ChatProps {}

const Chat: React.FC<ChatProps> = ({}) => {
  const Messages = [
    {
      name: 'Oleg',
      text: 'Привет бро',
    },
  ];
  return (
    <div className="chat">
      <div className="chat__block">
        {Messages.map((msg, i) => (
          <ChatItems key={i} text={msg.text} name={msg.name} />
        ))}
      </div>
      <div>
        <input placeholder="Отправить сообщение..." type="text" className="header__input" />
        <button className="header__btn">Отправить</button>
      </div>
    </div>
  );
};

export default Chat;

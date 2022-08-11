import React from 'react';
import ChatItems from './ChatItems';
import socket from '../../socket';
interface ChatProps {
  userName: any;
  roomId: any;
  onAddMessage: any;
  messages: { userName: string; text: string }[];
}

const Chat: React.FC<ChatProps> = ({ userName, roomId, onAddMessage, messages }) => {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef<HTMLDivElement>(null);

  const onSendMessage = () => {
    console.log('click');
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, text: messageValue });
    setMessageValue('');
  };

  React.useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__block" ref={messagesRef}>
        {messages.map((msg, i) => (
          <ChatItems key={i} text={msg.text} userName={msg.userName} />
        ))}
      </div>
      <div>
        <input
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
          placeholder="Отправить сообщение..."
          type="text"
          className="header__input"
        />
        <button onClick={onSendMessage} className="header__btn">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;

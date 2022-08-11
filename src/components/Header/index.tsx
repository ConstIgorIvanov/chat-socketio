import React from 'react';
import axios from 'axios';
interface HeaderProps {
  onLogin: any;
}

const Header: React.FC<HeaderProps> = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };

    await axios.post('/rooms', obj);
    onLogin(obj);
  };
  return (
    <div className="header">
      <div>React Test SocketIO chat</div>
      <div>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="header__input"
          placeholder="nickname"
        />
        <input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          className="header__input"
          placeholder="room id"
        />
        <button disabled={isLoading} onClick={onEnter} className="header__btn">
          Подключиться
        </button>
      </div>
    </div>
  );
};

export default Header;

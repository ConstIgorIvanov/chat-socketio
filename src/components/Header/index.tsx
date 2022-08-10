import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="header">
      <div>React Test SocketIO chat</div>
      <div>
        <input type="text" className="header__input" placeholder="nickname" />
        <input type="text" className="header__input" placeholder="room id" />
        <button className="header__btn">Подключиться</button>
      </div>
    </div>
  );
};

export default Header;

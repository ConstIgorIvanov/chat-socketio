import React from 'react';
import axios from 'axios';
import socket from './socket';
import reducer from './reducer';

import Chat from './components/Chat';
import Header from './components/Header';

export type MessageChat = {
  name: string;
  text: string;
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj: { roomId: string; userName: string }) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });

    socket.emit('ROOM:JOIN', obj);

    const { data } = await axios.get(`/rooms/${obj.roomId}`);

    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  };

  const setUsers = (users: string[]) => {
    console.log('setUsers', users);
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };

  const addMessage = (message: { userName: string; text: string }) => {
    console.log('addMessage', message);
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    });
  };

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
  }, []);

  return (
    <>
      <Header onLogin={onLogin} />
      <Chat {...state} onAddMessage={addMessage} />
    </>
  );
}

export default App;

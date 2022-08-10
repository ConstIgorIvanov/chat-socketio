import React from 'react';
import Chat from './components/Chat';
import Header from './components/Header';
import { io, Socket } from 'socket.io-client';

export type MessageChat = {
  name: string;
  text: string;
};

function App() {
  const socketRef = React.useRef<Socket>();
  React.useEffect(() => {
    socketRef.current = io('http://localhost:3001/', { transports: ['websocket'] });
  }, []);
  return (
    <>
      <Header />
      <Chat />
    </>
  );
}

export default App;

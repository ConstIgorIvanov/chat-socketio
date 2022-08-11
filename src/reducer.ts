/* eslint-disable import/no-anonymous-default-export */

export interface State {
  joined: boolean;
  roomId: string | null;
  userName: string | null;
  users: string[];
  messages: { userName: string; text: string }[];
}

export default (state: State, action: any) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      };

    case 'SET_DATA':
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};

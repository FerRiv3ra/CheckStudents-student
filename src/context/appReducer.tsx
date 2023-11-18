import {User} from '../types/appContextProps';

export type AppState = {
  showModalAdd: boolean;
  showProfile: boolean;
  users: User[];
  activeUser?: User;
};

export type ReducerAction =
  | {type: 'addUser'; payload: User}
  | {type: 'deleteUsers'}
  | {type: 'removeActiveUser'}
  | {type: 'setActiveUser'; payload: User}
  | {type: 'setUsers'; payload: User[]}
  | {type: 'toggleModal'}
  | {type: 'toggleProfile'};

export const appReducer = (state: AppState, action: ReducerAction) => {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'deleteUsers':
      return {
        ...state,
        users: [],
      };
    case 'setActiveUser':
      return {
        ...state,
        activeUser: action.payload,
      };
    case 'setUsers':
      return {
        ...state,
        users: action.payload,
      };
    case 'toggleModal':
      return {
        ...state,
        showModalAdd: !state.showModalAdd,
      };
    case 'toggleProfile':
      return {
        ...state,
        showProfile: !state.showProfile,
      };
    case 'removeActiveUser':
      return {
        ...state,
        activeUser: undefined,
      };
  }
};

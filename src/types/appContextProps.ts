export type User = {
  id: string;
  name: string;
  surname: string;
};

export type AppContextProps = {
  activeUser?: User;
  showModalAdd: boolean;
  showProfile: boolean;
  users: User[];
  addUser: (user: User) => Promise<boolean>;
  removeUsers: () => void;
  removeActiveUser: () => void;
  setActiveUser: (id: string) => boolean;
  toggleModal: () => void;
  toggleProfile: () => void;
};

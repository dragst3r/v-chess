import React, { useState, useContext } from "react";

export type User = {
  userId: string | null;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  loggedIn: boolean;
};
const UserContext = React.createContext<User>({} as User);
const UpdateUserContext = React.createContext<(user: User) => void>(() => {});

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = (): [User, (user: User) => void] => {
  const user = useContext(UserContext);
  const setUser = useContext(UpdateUserContext);

  return [user, setUser];
};

export default UserContextProvider;

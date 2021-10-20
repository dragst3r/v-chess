import React from "react";
import "./user-in-lobby.styles.css";

type Props = {
  displayName: string;
  photoUrl: string;
};
const UserInLobby: React.FC<Props> = ({displayName, photoUrl}) => {
  return (
    <div>
      <img className="user-image" src={photoUrl} />
    </div>
  );
};

export default UserInLobby; 

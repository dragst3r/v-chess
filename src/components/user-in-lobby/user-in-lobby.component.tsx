import React from "react";
import "./user-in-lobby.styles.css";

type Props = {
  displayName: string;
  photoUrl: string;
};
const UserInLobby: React.FC<Props> = (displayName, photoUrl) => {
  return (
    <div>
      <p className="user-display-name">{displayName}</p>
      <img className="user-image" src={photoUrl} />
    </div>
  );
};

export default UserInLobby; 

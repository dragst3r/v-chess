import React, { useState } from "react";
import { useSelectSide } from "../../utility/hooks/use-select-side";
import { PlayerServerInfo } from "../../utility/types";
import UserInLobby from "../user-in-lobby/user-in-lobby.component";
import "./lobby.styles.css";

type Props = {
  users: PlayerServerInfo[];
  roomId: string
};

const Lobby: React.FC<Props> = ({ users, roomId }) => {
  const handleSetSide = useSelectSide();

  return (
    <div onClick={()=>handleSetSide("",roomId)} className="lobby-container">
      {users.map((u,index) => (
        <UserInLobby key={index} displayName={u.displayName} photoUrl={u.photoURL} />
      ))}
    </div>
  );
};
export default React.memo(Lobby)
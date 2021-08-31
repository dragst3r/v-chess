import React from "react";
import { useHistory } from "react-router";
import "./join-room.styles.css";

type Props = {
  roomId: string;
  id: number;
};
const JoinRoom: React.FC<Props> = ({roomId, id}) => {
  const history = useHistory();
  const navigate = () => {
    history.push("/room/" + roomId, roomId);
  };

  return <div key={id} className="join-room" onClick={navigate}>{roomId}</div>;
};

export default JoinRoom;

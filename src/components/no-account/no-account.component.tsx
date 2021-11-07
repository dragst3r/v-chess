import React, { useState } from "react";
import { uuid } from "uuidv4";
import { useLocalStorage } from "../../utility/hooks/use-local-storage";
import { useUser } from "../../utility/user-context";
import "./no-account.styles.css";

type Props = {};
const NoAcount: React.FC<Props> = () => {
  const [nickName, setNickname] = useState("");
  const [, setLocalStorage] = useLocalStorage("v-chess-no-account", "");
  const [photoUrl, setPhotoUrl] = useState(
    `https://avatars.dicebear.com/api/bottts/1.svg`
  );
  const [randomId, setRandomId] = useState(uuid());
  const [, setUser] = useUser();
  const getRandomAvatar = () => {
    setRandomId(uuid());
    setPhotoUrl(`https://avatars.dicebear.com/api/bottts/${randomId}.svg`);
  };
  const updateNewUser = () => {
    const userToUpdate = {
      displayName: nickName,
      userId: randomId,
      photoURL: photoUrl,
      email: "",
      loggedIn: true,
    };
    setLocalStorage(userToUpdate);
    setUser(userToUpdate);
  };
  return (
    <div className="no-account-container">
      <img
        onClick={() => getRandomAvatar()}
        className="no-account-avatar"
        src={photoUrl}
      />
      <input
        value={nickName}
        onChange={(event) => setNickname(event.target.value)}
        placeholder="nickname..."
      ></input>
      <button onClick={updateNewUser}>Submit</button>
    </div>
  );
};

export default NoAcount;

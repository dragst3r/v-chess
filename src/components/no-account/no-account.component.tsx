import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { useLocalStorage } from "../../utility/hooks/use-local-storage";
import { useUser } from "../../utility/user-context";
import "./no-account.styles.css";
import { Bubble } from "../bubble/bubble.component";
type Props = {};
const NoAcount: React.FC<Props> = () => {
  const [nickName, setNickname] = useState("");
  const [, setLocalStorage] = useLocalStorage("v-chess-no-account", "");
  const [photoUrl, setPhotoUrl] = useState(
    `https://avatars.dicebear.com/api/bottts/1.svg`
  );
  const [showBubble, setShowBubble] = useState(false);
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
      <div className="no-account-bubble">
        <Bubble
          visible={showBubble}
          text={showBubble ? "Thanks..." : "Click me!"}
        />
      </div>

      <div className="no-account">
        <img
          onClick={() => {
            getRandomAvatar();
            setShowBubble(true);
          }}
          className="no-account-avatar"
          src={photoUrl}
        />
        <form className="no-account-form" onSubmit={updateNewUser}>
          <input
            className="no-account-input"
            onChange={(event) => {
              event.preventDefault();
              setNickname(event.target.value);
            }}
            value={nickName}
            placeholder="Your nickname..."
            type="text"
          />
          <input
            disabled={nickName == ""}
            className="no-account-submit"
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default NoAcount;

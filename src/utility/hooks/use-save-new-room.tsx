import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase-auth";

export const useSaveNewRoom = () => {
  const [documentId, setDocumentId] = useState("");
  const [roomId, setRoomId] = useState("");
  const saveNewRoom = (id: string) => {
    firestore
      .collection("rooms")
      .add({ roomId: id })
      .then((ref) => setDocumentId(ref.id))
      .catch((err) => console.error(err));
  };
  const removeRoom = (id:string) => {
    if (id) {
        console.log(id)
      firestore
        .collection("rooms")
        .doc(id)
        .delete()
        .then(() => setDocumentId(""))
        .catch((err) => console.error(err));
    }
  };
  useEffect(() => {
    if (roomId !== "") {
      saveNewRoom(roomId);
    }
    return removeRoom(documentId);
  }, [roomId]);
  return setRoomId;
};

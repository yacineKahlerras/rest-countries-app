import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default async function sendUserData(uid) {
  await setDoc(
    doc(collection(db, "users"), uid),
    {
      "United Arab Emirates": false,
      Benin: true,
    },
    { merge: true }
  );
}

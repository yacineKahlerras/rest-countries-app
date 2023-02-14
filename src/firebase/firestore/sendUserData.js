import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default async function sendUserData(uid, countryName, isFavorite) {
  await setDoc(
    doc(collection(db, "users"), uid),
    {
      [countryName]: isFavorite,
    },
    { merge: true }
  );
}

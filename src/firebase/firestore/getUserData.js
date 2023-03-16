import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config.js";

export default async function getUserData(uid, setFavoriteCountries) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setFavoriteCountries(docSnap.data());
  } else {
    console.log("No such document!");
    setFavoriteCountries(null);
  }
}

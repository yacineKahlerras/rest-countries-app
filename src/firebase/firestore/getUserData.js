import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default async function getUserData(uid) {
  const docRef = doc(db, "cities", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

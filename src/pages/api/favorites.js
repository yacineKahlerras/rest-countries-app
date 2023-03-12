import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config.js";

export default async function handler(req, res) {
  const { uid } = req.body;
  if (!uid) return;

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
  } else {
    console.log("No such document!");
    res.status(200).json(null);
  }
}

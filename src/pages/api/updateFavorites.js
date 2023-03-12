import { collection, deleteField, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config.js";

export default async function handler(req) {
  const { uid, countryName, isFavorite } = req.body;
  if (!uid) return;

  const fieldAction = isFavorite ? true : deleteField();

  await setDoc(
    doc(collection(db, "users"), uid),
    {
      [countryName]: fieldAction,
    },
    { merge: true }
  )
    .then(() => {})
    .catch((error) => {
      console.log(`Unsuccessful returned error ${error}`);
    });
}

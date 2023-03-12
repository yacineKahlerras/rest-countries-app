import axios from "axios";

export default async function updateUserFavorites(
  uid,
  countryName,
  isFavorite
) {
  axios.post("/api/updateFavorites", {
    uid,
    countryName,
    isFavorite,
  });
}

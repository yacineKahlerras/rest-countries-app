import axios from "axios";

export default async function getUserData(uid, setFavoriteCountries) {
  axios
    .post("/api/favorites", {
      uid,
    })
    .then((res) => {
      const data = res.data;
      setFavoriteCountries(data);
    });
}

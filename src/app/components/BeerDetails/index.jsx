import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../customhook/useFetch";
import style from "./style.module.css";

export const BeerDetails = () => {
  const { id } = useParams();
  const { beer, error, isLoading } = useFetch(
    "https://api.openbrewerydb.org/v1/breweries/" + id
  );
  const navigate = useNavigate();

  // const handleDelete = () => {
  //   fetch("https://api.openbrewerydb.org/v1/breweries/" + id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     navigate("/");
  //   });
  // };

  // const handleEdit = () => {
  //   fetch("https://api.openbrewerydb.org/v1/breweries/" + beer.id, {
  //     method: "PATCH",
  //   }).then(() => {
  //     navigate("/edit");
  //   });
  // };

  return (
    <div className={style["brewery - details"]}>
      {/* <button onClick={handleEdit}>edit</button> */}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {beer && (
        <article>
          <h2>Name: {beer.name}</h2>
          <p>
            Location: {beer.city}, {beer.country}
          </p>
          <p>Address: {beer.address_1}</p>
          <p>Phone: {beer.phone}</p>
          <p></p>

          {/* <button onClick={handleDelete}>delete</button> */}
        </article>
      )}
    </div>
  );
};

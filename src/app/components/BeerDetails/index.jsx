import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../customhook/useFetch";
import style from "./style.module.css";

export const BeerDetails = () => {
  const { id } = useParams();
  const { beer, error, isLoading } = useFetch(
    "https://api.openbrewerydb.org/v1/breweries/" + id
  );
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log(id);
    try {
      const response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries/" + id,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result, "a result received");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries/" + beer.id,
        {
          method: "PATCH",
        }
      );
      const feedback = await response.json();
      console.log(feedback, "I got a feedback");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={style["brewery - details"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {beer && (
        <article>
          <button className={style.button} onClick={handleEdit}>
            edit
          </button>
          <h2>Name: {beer.name}</h2>
          <p>
            Location: {beer.city}, {beer.country}
          </p>
          <p>Address: {beer.address_1}</p>
          <p>Phone: {beer.phone}</p>
          <p></p>

          <button className={style.button} onClick={handleDelete}>
            delete
          </button>
        </article>
      )}
    </div>
  );
};

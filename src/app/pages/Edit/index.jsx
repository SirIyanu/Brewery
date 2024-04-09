import { BreweryList } from "../../components/BreweryList";
import { useFetch } from "../../customhook/useFetch";
import { Home } from "../Home";

export const Edit = () => {
  const { beer, isLoading, error } = useFetch(
    "https://api.openbrewerydb.org/v1/breweries"
  );
  console.log(beer, "beer is showing");
  return (
    <div>
      lets edit
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {beer && <BreweryList />}
    </div>
  );
};

import { Link } from "react-router-dom";
import style from "./style.module.css";
export const BreweryList = ({ breweries, title }) => {
  return (
    <div className={style["brewery-list"]}>
      <h2>{title}</h2>
      {breweries &&
        breweries.map((brewery) => (
          <div className={style["brewery-preview"]} key={brewery.id}>
            <Link to={`/breweries/${brewery.id}`}>
              <h2>{brewery.name}</h2>
              <p>Popular drink in {brewery.city}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

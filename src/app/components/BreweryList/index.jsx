import { Link } from "react-router-dom";
import style from "./style.module.css";
import { GiBeerStein } from "react-icons/gi";
export const BreweryList = ({ breweries, title }) => {
  return (
    <div className={style["brewery-list"]}>
      <h2>
        {title} &nbsp;{" "}
        <span className={style.spin}>
          <GiBeerStein />
        </span>
      </h2>
      <br />
      {breweries &&
        breweries.map((brewery) => (
          <div className={style["brewery-preview"]} key={brewery.id}>
            <Link className={style.link} to={`/breweries/${brewery.id}`}>
              <h2>{brewery.name}</h2>
              <p>Popular drink in {brewery.city}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

import React from "react";
import { useFetch } from "../../customhook/useFetch";
import style from "./style.module.css";
import { Pagination } from "../../components/Pagination";

export const Home = () => {
  const { beer } = useFetch("https://api.openbrewerydb.org/v1/breweries");

  // const [beer, setBeers] = useState("");
  console.log(beer, "beer from home page");
  return (
    <div className={style.home}>
      <Pagination />
    </div>
  );
};

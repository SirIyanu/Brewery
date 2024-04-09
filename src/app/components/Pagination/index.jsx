import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BreweryList } from "../BreweryList";
import { useFetch } from "../../customhook/useFetch";

export const Pagination = () => {
  const [breweries, setBreweries] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [breweriesPerPage, setBreweriesPerPage] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [limit, setLimit] = useState(5);

  const navigate = useNavigate();
  const { beer, error, isLoading } = useFetch(
    "https://api.openbrewerydb.org/v1/breweries"
  );

  // handle page change
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   const breweryIndex = (pageNumber - 1) * breweriesPerPage;
  //   if (breweries.length > 0 && breweryIndex < breweries.length) {
  //     const breweryId = breweries[breweryIndex].id;
  //     navigate(`/edit/${breweryId}`);
  //   }
  // };

  // // handle change in beers per page
  // const handleBeersPerPageChange = (event) => {
  //   setBreweriesPerPage(parseInt(event.target.value));
  //   setCurrentPage(1);
  // };

  // const handleBeerItemClick = (brewery) => {
  //   navigate(`/edit/${brewery.id}`);
  // };

  const handleNext = () => {
    const nextIndex = startIndex + limit;
    if (nextIndex < beer.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - limit;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setStartIndex(0); // Reset start index when changing limit
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + limit >= beer.length;
  // ${brewery.id}
  return (
    <div className="container">
      <h1>Beers</h1>
      {/* Display fetched beers */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {beer && (
        <BreweryList
          // onClick={handleBeerItemClick}
          breweries={beer.slice(startIndex, startIndex + limit)}
          title="Beers and their location"
        />
      )}

      {/* Pagination */}
      <div>
        <button disabled={isPrevDisabled} onClick={handlePrev}>
          Previous
        </button>
        <span> Page {startIndex} </span>
        <button disabled={isNextDisabled} onClick={handleNext}>
          Next
        </button>
      </div>
      {/* Beers per page selector */}
      <div>
        <label htmlFor="breweriesPerPage">Beers per page:</label>
        <select
          id="breweriesPerPage"
          // value={breweriesPerPage}
          onChange={handleLimitChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
    </div>
  );
};

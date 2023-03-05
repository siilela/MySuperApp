import React, { useEffect, useState } from "react";
import mockData from "../api/data.json";
import "../styles2.css";

const Contries = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(10);
  const [items, setItems] = useState(mockData);
  //     set search query to empty string
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const addMore = () => {
    // function that will make count add by 2 to show 2 more items
    setCount(count + 2);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

   //Filter by Country name
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }


  //Filter by Regional
// function search(items) {
//     return items.filter((item) => {
//         if (item.region === filterParam) {
//             return searchParam.some((newItem) => {
//                 return (
//                     item[newItem]
//                         .toString()
//                         .toLowerCase()
//                         .indexOf(q.toLowerCase()) > -1
//                 );
//             });
//         } else if (filterParam === "All") {
//             return searchParam.some((newItem) => {
//                 return (
//                     item[newItem]
//                         .toString()
//                         .toLowerCase()
//                         .indexOf(q.toLowerCase()) > -1
//                 );
//             });
//         }
//     });
// }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrapper">
        <h2 className="countries_heading">COUNTRIES</h2>
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>
          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Countries"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

        <ul className="card-grid">
          {/* {items.slice(0, count).map((item) => ( */}
          {search(items).map((item) => (
            <li key={item.name.common}>
              <article className="card" key={item.maps}>
                <div className="card-image">
                  <img src={item.flag} alt={item.flag} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name.official}</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <button onClick={addMore}></button>
      </div>
    );
  }
};

export default Contries;

import { useEffect, useState } from "react";
// import CountryData from '../../CountryData'
import Card from "./Card";
import Shimmer from "./Shimmer";

export default function Country({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return !countriesData.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="CountryListContainer">
        {countriesData
          .filter(
            (country) =>
              country.name.common.toLocaleLowerCase().includes(query) ||
              country.region.toLocaleLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("eg-in")}
                capital={country.capital}
                region={country.region}
                data={country}
              />
            );
          })}
      </div>
    </>
  );
}

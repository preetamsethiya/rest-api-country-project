import { useEffect, useState } from "react";
import Card from "./Card";
import { data, Link, useLocation, useParams } from "react-router";
import Shimmer from "./Shimmer";
import { Button, Card2, Input } from "./Parts";
import rohit02 from "../../Assets/Images/02_rohit.jpg";

export default function CountryDetail() {
  const contryName = useParams();
  const { state } = useLocation();
  const [CountryData, setCountryData] = useState(null);
  const [btnName, setBtnName] = useState(null);

  function updateCountryData(data) {
    setCountryData({
      name: data[0].name.common,
      flag: data[0].flags.svg,
      population: data[0].population,
      capital: data[0].capital,
      region: data[0].region,
      borders: [],
    });

    if (!data[0].borders) {
      return (data[0].borders = []);
    }

    Promise.all(
      data[0].borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountries]) => {
            return borderCountries.name.common;
          });
      })
    ).then((borders) => {
      setCountryData((prev) => ({ ...prev, borders }));
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData([state]);
      return;
    }
    fetch(
      `https://restcountries.com/v3.1/name/${contryName.country}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        updateCountryData(data);
      });
  }, [contryName]);

  return CountryData === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="CountryListContainer">
        <Card
          key={CountryData.name}
          name={CountryData.name}
          flag={CountryData.flag}
          population={CountryData.population.toLocaleString("eg-in")}
          capital={CountryData.capital}
          region={CountryData.region}
        />
      </div>
      <div>
        {CountryData.borders.length !== 0 &&
          CountryData.borders.map((border) => (
            <Link
              key={border}
              to={`/${border}`}
              style={{ margin: 16, textDecoration: "none" }}
            >
              {" "}
              {border}
            </Link>
          ))}
      </div>

      {/* <div className="componentContainer">
        <div className="inputCircle">
          <input type="text" />
          <div className="circle flexAll">&times;</div>
        </div> */}

      {/* parts */}
      {/* parts */}

      {/* <Input /> */}
      {/* <Button /> */}
      {/* <div className="card3_Container">
          <div className="card3">
            <div className="img_Container">
              <img src={rohit02} alt={rohit02} />
            </div>
            <div className="text_Container">
              <div className="btn_Container">
                <Button text={"Shop"} />
                <Button text={"Cart"} />
              </div>
              <div className="card_Text">
                <h3>
                  Lorem <span className="span">ipsum</span> dolor sit amet.
                  <Button
                    btn_Function={(e) =>
                      setBtnName(<Input className={""} placeholder={"hii"} />)
                    }
                    text={"name"}
                  />
                  <div className="hidge " hidden>
                    hii
                    {btnName}
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}

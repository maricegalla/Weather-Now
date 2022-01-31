import React, { useCallback, useEffect, useState } from "react";
import {
  CardContentContainer,
  CardHeaderContainer,
  CardMainContainer,
  CardFooterContainer,
} from "./styles";
import {
  colorChange,
  displayTime,
  saveLocalStorage,
} from "src/helpers/functions";
import axios from "axios";
import { ReactComponent as Loader } from "src/assets/loader.svg";
import Error from "src/components/Error";

const Card = ({ city, country }) => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = useCallback(async (city) => {
    localStorage.clear();
    setError(false);
    setLoading(true);
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const options = {
      params: {
        q: city,
        units: "metric",
        appid: process.env.REACT_APP_APIKEY,
      },
    };
    try {
      const req = await axios.get(url, options);
      const temp = Math.round(req.data.main.temp, 0);
      const press = Math.round(req.data.main.pressure, 0);
      const hum = Math.round(req.data.main.humidity, 0);
      const updatedAt = displayTime();
      setCityData({ temp, press, hum, updatedAt });
      saveLocalStorage(temp, press, updatedAt, hum, city);
      setLoading(false);
      colorChange(city);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      setError(true);
    }
  }, []);

  const tryAgain = useCallback(
    (e) => {
      e.preventDefault();
      const fullCity =
        e.target.parentNode.parentNode.firstChild.firstChild.innerText;
      const thisCity = fullCity.slice(0, -4);
      getData(thisCity);
    },
    [getData]
  );

  useEffect(() => {
    getData(city);
    setTimeout(() => {
      window.location.reload();
    }, 600000);
  }, [city, getData]);

  return (
    <CardContentContainer>
      <CardHeaderContainer>
        <span>
          {city}, {country}
        </span>
      </CardHeaderContainer>
      {(() => {
        if (loading) {
          return <Loader id="loader" data-testid="loader" />;
        }
        if (error) {
          return <Error onClick={(e) => tryAgain(e)} />;
        } else {
          if (city === "Urubici") {
            return (
              <>
                <CardMainContainer>
                  <p id={city}>
                    {cityData.temp}
                    <small>°</small>
                  </p>
                </CardMainContainer>
                <CardFooterContainer>
                  <div>
                    <div>
                      <label>HUMIDITY</label>
                      <span>
                        {cityData.hum}
                        <small>%</small>
                      </span>
                    </div>
                    <div>
                      <label>PRESSURE</label>
                      <span>
                        {cityData.press}
                        <small>hPa</small>
                      </span>
                    </div>
                  </div>
                  <p>Updated at {cityData.updatedAt}</p>
                </CardFooterContainer>
              </>
            );
          } else {
            return (
              <>
                <CardMainContainer>
                  <p id={city}>
                    {cityData.temp}
                    <small>°</small>
                  </p>
                </CardMainContainer>
                <CardFooterContainer>
                  <p>Updated at {cityData.updatedAt}</p>
                </CardFooterContainer>
              </>
            );
          }
        }
      })()}
    </CardContentContainer>
  );
};

export default Card;

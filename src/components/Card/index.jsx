import React, { useEffect, useCallback, useState } from "react";
import {
  CardContentContainer,
  CardHeaderContainer,
  CardMainContainer,
  CardFooterContainer,
  ErrorContainer,
} from "./styles";
import axios from "axios";
import { ReactComponent as Loader } from "src/assets/loader.svg";

const Card = ({ city, country }) => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = useCallback(async (city) => {
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
      setLoading(false);
      colorChange(city);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      setError(true);
    }
  }, []);

  const colorChange = (city) => {
    const temperature = document.getElementById(city);
    const realTemp = parseInt(temperature.innerText.slice(0, -1));

    if (realTemp <= 5) {
      temperature.style.color = "#69A3FF";
    }
    if (realTemp > 5 && realTemp <= 25) {
      temperature.style.color = "#FF9632";
    }
    if (realTemp > 25) {
      temperature.style.color = "#ED1946";
    }
  };

  const displayTime = () => {
    let time = "";

    const currentTime = new Date();
    const hours =
      currentTime.getHours() < 10
        ? "0" + currentTime.getHours()
        : currentTime.getHours();

    const minutes =
      currentTime.getMinutes() < 10
        ? "0" + currentTime.getMinutes()
        : currentTime.getMinutes();

    const seconds =
      currentTime.getSeconds() < 10
        ? "0" + currentTime.getSeconds()
        : currentTime.getSeconds();

    time += hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) {
      time += "PM";
    } else {
      time += "AM";
    }
    return time;
  };

  const tryAgain = (e) => {
    e.preventDefault();
    const thisCity = e.target.parentNode.parentNode.firstChild.getAttribute("id")
    getData(thisCity)
  }

  useEffect(() => {
    getData(city);
  }, [city, getData]);

  setInterval(getData, 600000);

  return (
    <CardContentContainer>
      <CardHeaderContainer id={city}>
        <span>
          {city}, {country}
        </span>
      </CardHeaderContainer>
      {(() => {
        if (loading) {
          return <Loader className="loader" />;
        }
        if (error) {
          return <ErrorContainer>
            <p>Something went wrong</p>
            <button onClick={(e) => tryAgain(e)}>Try Again</button>
          </ErrorContainer>;
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

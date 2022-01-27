import React, { useEffect, useCallback, useMemo, useState } from "react";
import { MainContentContainer } from "./styles";
import Card from "src/components/Card";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  const cities = useMemo(
    () => [
      { name: "Nuuk", country: "GL" },
      { name: "Urubici", country: "BR" },
      { name: "Nairobi", country: "KE" },
    ],
    []
  );

  // const getData = useCallback(async (cities) => {
  //   cities.forEach(async (city) => {
  //     const url = "https://api.openweathermap.org/data/2.5/weather";
  //     const options = {
  //       params: {
  //         q: city.name,
  //         units: "metric",
  //         appid: process.env.REACT_APP_APIKEY,
  //       },
  //     };
  //     const req = await axios.get(url, options);
  //     const res = req.data;
  //     const key = city.name;
  //     setData((prevState) => ({
  //       ...prevState,
  //       [key]: res,
  //     }));
  //   });
  // }, []);

  // useEffect(() => {
  //   getData(cities);
  // }, [cities, getData]);

  // setInterval(getData, 600000);

  return (
    <MainContentContainer>
      {cities.map((city, index) => (
        <Card
          key={index}
          headerChild={`${city.name}, ${city.country}`}
          mainChild="9"
          footerChild="Teste"
        />
      ))}
    </MainContentContainer>
  );
};

export default Main;

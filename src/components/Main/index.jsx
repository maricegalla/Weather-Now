import React, {useMemo} from "react";
import { MainContentContainer } from "./styles";
import Card from "src/components/Card";


const Main = () => {
  const cities = useMemo(
    () => [
      { name: "Nuuk", country: "GL" },
      { name: "Urubici", country: "BR" },
      { name: "Nairobi", country: "KE" },
    ],
    []
  );
  return (
    <MainContentContainer>
      {cities.map((c, index) => (
        <Card key={index} city={c.name} country={c.country} data-testid="card"/>
      ))}
    </MainContentContainer>
  );
};

export default Main;

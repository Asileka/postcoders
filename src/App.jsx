import { useEffect, useState } from "react";
import { getAreaData } from "./api/index.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  const [postcode, setPostcode] = useState("BB10");
  const [postcodeText, setPostcodeText] = useState("BB10");
  const [areas, setAreas] = useState([]);
  const [country, setCountry] = useState("Great Britain");

  function handleSubmit(e) {
    e.preventDefault();
    setPostcodeText(postcode);
  }

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);
      setAreas(areaData.places);
      setCountry(areaData.country);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, [postcodeText]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${postcodeText}: ${areas.length}`}</h2>
      <h2>{`Country: ${country}`}</h2>
      <form>
        <label>
          Enter outcode:
          <input onChange={(e) => setPostcode(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {areas.map((i) => {
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} component="div">
                {`Area name: ${i["place name"]}`}
              </Typography>
              <Typography sx={{ fontSize: 12 }} component="div">
                {`Longitude: ${i["longitude"]}`}
              </Typography>
              <Typography sx={{ fontSize: 12 }} component="div">
                {`Latitude: ${i["latitude"]}`}
              </Typography>
              <Typography sx={{ fontSize: 12 }} component="div">
                {`State: ${i["state"]}`}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default App;

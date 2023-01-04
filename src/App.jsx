import { useEffect, useState } from "react";
import { getAreaData } from "./api/index.js";

import "./App.css";

function App() {
  const [postcode, setPostcode] = useState("BB10");
  const [postcodeText, setPostcodeText] = useState("BB10");
  const [areas, setAreas] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setPostcodeText(postcode);
  }

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);

      //areas.concat(areaData);

      setAreas(areaData);
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
      <form>
        <label>
          Enter outcode:
          <input
            onChange={(e) => setPostcode(e.target.value)}
            // defaultValue={postcode}
            //placeholder="BB10"
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;

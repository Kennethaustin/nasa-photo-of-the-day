import React, {useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [NasaData, setNasaData] = useState("https://api.nasa.gov/planetary/apod?api_key=QgbkPgyO0M5SCoeiV7M2Vp741LDB6R4QjYVxGbiT")
  axios.get(NasaData)
  .then(Response => {console.log(Response);
  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

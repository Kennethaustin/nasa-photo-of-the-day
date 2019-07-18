import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Components from "./Components/Components.js"

function App() {
  const [NasaData,setNasaData] = useState([]);
  const [date, setdate] = useState("");
  const [explanation, setexplanation] = useState("");
  const [mediatype, setmediatype] = useState();
  const [title, settitle] = useState();
  const [url, seturl] = useState();

  useEffect(() => {
    axios
    .get ("https://api.nasa.gov/planetary/apod?api_key=QgbkPgyO0M5SCoeiV7M2Vp741LDB6R4QjYVxGbiT")

  .then(Response =>
    {settitle(Response.data.title);
      setNasaData(Response.data.NasaData);
      setdate(Response.data.date);
      setexplanation(Response.data.explanation);
      seturl(Response.data.url);
      setmediatype(Response.data.mediatype);
  })
})
  return (
    <div className="App">
      <Components
      NasaData={NasaData}
      title={title}
      date={date}
      url={url}
      mediatype={mediatype}
      explanation={explanation}
      />


    
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

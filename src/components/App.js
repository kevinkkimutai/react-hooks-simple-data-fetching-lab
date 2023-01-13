import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
        setLoading(true);
      });
  }, []);

  if (!loading) return <p>Loading...</p>;
  return (
    <div>
      {/* <h1 name={image.status}>{image.status}</h1> */}
      <img src={image.message} alt="A Random Dog" />
    </div>
  );
}

export default App;
